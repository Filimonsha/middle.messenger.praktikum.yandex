import stateManager from "../utils/framework/applicationStateManager";
import {Chat, Chats, FullMessage} from "../utils/api/types/chat";
import chatsApi from "../utils/api/chatsApi";
import {MessagesComponent} from "../pages/home/modules/chat/main/messages";
import {Message} from "../pages/home/modules/chat/components/message";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";
import {formattedDateInSeconds} from "../utils/helpers/formateDate";
import {baseUrl, resources} from "../utils/api/const/routes";

type MessengerStoreInit = {
    userWannaCreateNewChat: boolean,
    newChatTitle: string,
    currentChatId: number | null,
    messagesSocket: WebSocket | null,
    // currentChatMessages: Array<Message>
    currentChatMessages: Array<FullMessage>
}

const initialState: MessengerStoreInit = {
    newChatTitle: "",
    userWannaCreateNewChat: false,
    currentChatId: null,
    messagesSocket: null,
    currentChatMessages: []
}

export const messengerStore = stateManager.registerStore({
    name: "messengerStore",
    initialState,
    reducers: {
        createChat: (state, data: string) => {
            chatsApi.createChat(data).then((res: any) => {
                if (res.status === 200) {

                    state.userWannaCreateNewChat = false
                    chatsApi.getChats().then((chatRes: any) => {
                        if (chatRes.status === 200) {
                            try{
                                const chats: Array<ChatItem> = JSON.parse(chatRes.response).map((chatInfo: Chat) => new ChatItem({
                                    state: {
                                        ...chatInfo,
                                        avatar: baseUrl + resources + chatInfo.avatar || require("../../static/img/default-image.jpeg"),
                                        last_message: {
                                            ...chatInfo.last_message,
                                            time: formattedDateInSeconds(chatInfo.last_message?.time),
                                            content: chatInfo.last_message?.content.length > 200 ?
                                                chatInfo.last_message?.content.slice(0, 200) + "..." :
                                                chatInfo.last_message?.content
                                        }
                                    },
                                    events: {
                                        click() {
                                            messengerStore.reducers.setCurrentChatId(chatInfo.id)
                                        }
                                    }
                                }))
                                sidebar.updateState("chatItems", chats)
                            }
                            catch (e) {

                            }
                        }
                    })
                }
            })
                .catch(error =>{})
        },
        setUserWannaCreateNewChat: (state, data: boolean) => {
            state.userWannaCreateNewChat = data
        },

        sendNewMessage: (state, data: string) => {
            state.messagesSocket?.send(JSON.stringify({
                content: data,
                type: 'message',
            }))
        },

        setCurrentChatId: (state, data: number) => {
            state.currentChatId = data
            state.currentChatMessages = []
            chatsApi.getTokenToConnection(stateManager.getState().currentChatId)
                .then((tokenResult: any) => {
                    if (tokenResult.status === 200) {
                        const url = `wss://ya-praktikum.tech/ws/chats/${stateManager.getState().userInfo.id}/${stateManager.getState().currentChatId}/${JSON.parse(tokenResult.response).token}`
                        const socket = new WebSocket(url)
                        state.messagesSocket = socket
                        socket.addEventListener('open', () => {
                            console.log('Соединение установлено');

                            socket.send(JSON.stringify({
                                content: '0',
                                type: 'get old',
                            }))

                        });


                        socket.addEventListener('close', event => {
                            if (event.wasClean) {
                                console.log('Соединение закрыто чисто');
                            } else {
                                console.log('Обрыв соединения');
                            }

                            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                        });

                        socket.addEventListener('message', event => {
                            const messagesData: Array<FullMessage> | FullMessage = JSON.parse(event.data)
                            if (Array.isArray(messagesData)) {
                                if (!state.currentChatMessages) {
                                    state.currentChatMessages = messagesData
                                    MessagesComponent.updateState<Array<Message>>("messages", messagesData.map(message => {
                                        return new Message({
                                            state: {
                                                ...message,
                                                isHomeMessage: message.user_id === stateManager.getState().userInfo.id
                                            }
                                        })
                                    }))

                                } else {
                                    state.currentChatMessages = [...state.currentChatMessages, ...messagesData]

                                    MessagesComponent.updateState<Array<Message>>("messages", state.currentChatMessages.map(message => {
                                        return new Message({
                                            state: {
                                                ...message,
                                                isHomeMessage: message.user_id === stateManager.getState().userInfo.id
                                            }
                                        })
                                    }))
                                }
                            } else {
                                const message = new Message({
                                    state: {
                                        ...messagesData,
                                        isHomeMessage: messagesData.user_id === stateManager.getState().userInfo.id
                                    }
                                })
                                if (!state.currentChatMessages) {
                                    state.currentChatMessages = [messagesData]
                                    MessagesComponent.updateState<Array<Message>>("messages", [new Message({
                                        state: {
                                            ...messagesData,
                                            isHomeMessage: messagesData.user_id === stateManager.getState().userInfo.id
                                        }
                                    })])

                                } else {
                                    state.currentChatMessages.push(messagesData)

                                    MessagesComponent.updateState<Array<Message>>("messages", state.currentChatMessages.map(message => {
                                        return new Message({
                                            state: {
                                                ...message,
                                                isHomeMessage: message.user_id === stateManager.getState().userInfo.id
                                            }
                                        })
                                    }))
                                }
                            }
                            // MessagesComponent.updateState<Array<Message>>("messages", state.currentChatMessages)

                        });

                        socket.addEventListener('error', (event: any) => {
                            console.log('Ошибка', event.message);
                        });
                    }
                })
        },
    }
})
