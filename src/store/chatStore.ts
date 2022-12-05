import stateManager from "../utils/framework/applicationStateManager";
import {Chat} from "../utils/api/types/chat";
import chatsApi from "../utils/api/chatsApi";
import userApi from "../utils/api/userApi";
import {messengerStore} from "./messengerStore";
import {UserInfo} from "../utils/api/types/auth";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import {baseUrl, resources} from "../utils/api/const/routes";
import {formattedDateInSeconds} from "../utils/helpers/formateDate";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";

type ChatStoreInit = {
    userWantAddUsers: boolean,
    userWantDeleteUsers: boolean
    statusText: string
}

const initialState: ChatStoreInit = {
    userWantAddUsers: false,
    userWantDeleteUsers: false,
    statusText: ""
}

export const chatStore = stateManager.registerStore({
    name: "chatStore",
    initialState,
    reducers: {
        addUsersToChat: (state, data: string) => {
            if (data) {
                userApi.searchUserByLogin(data).then((res: any) => {
                    if (res.status === 200) {
                        try {
                            if (res.response.length > 0) {
                                chatsApi.addUsers({
                                    chatId: stateManager.getState()?.currentChatId,
                                    users: JSON.parse(res).response.map((user: UserInfo) => user.id)
                                }).then(() => {
                                    state.statusText = "User successfully added"
                                    const timeout = setTimeout(() => {
                                        state.statusText = ""
                                    }, 2000)
                                    clearTimeout(timeout)
                                })
                                    .catch(error => console.log(error))
                            } else {
                                state.statusText = "No users with this Login"
                            }
                        } catch {

                        }
                    } else {
                        try {
                            state.statusText = JSON.parse(res.response).reason

                        } catch {

                        }
                    }
                })
                    .catch(error => console.log(error))
            } else {
                state.statusText = "Логин не может быть пустым!"
            }
        },
        deleteUsersFromChat: (state, data) => {
            userApi.searchUserByLogin(data).then((res: any) => {
                if (res.status === 200) {
                    if (res.response.length > 0) {
                        chatsApi.deleteUsers({
                            chatId: stateManager.getState()?.currentChatId,
                            users: JSON.parse(res.response).map((user: UserInfo) => user.id)
                        }).then(() => {
                            state.statusText = "User successfully removed"
                            const timeout = setTimeout(() => {
                                state.statusText = ""
                            }, 2000)
                            clearTimeout(timeout)
                        })
                            .catch(error => console.log(error))
                    } else {
                        state.statusText = "No users with this Login"
                    }

                } else {
                    state.statusText = JSON.parse(res.response).reason
                }
            })
                .catch(error => console.log(error))
        },
        setUserWantDeleteUsers: (state, data: boolean) => {
            state.userWantDeleteUsers = data
        },
        setUserWantAddUsers: (state, data: boolean) => {
            state.userWantAddUsers = data
        },
        deleteChat: () => {
            chatsApi.deleteChatById(stateManager.getState().currentChatId).then((res: any) => {
                if (res.status === 200) {
                    messengerStore.reducers.setCurrentChatId(null)
                    chatsApi.getChats().then((res: any) => {
                        if (res.status === 200) {
                            try{
                                const chats: Array<ChatItem> = JSON.parse(res.response).map((chatInfo: Chat) => new ChatItem({
                                    state: {
                                        ...chatInfo,
                                        avatar:baseUrl + resources  +  chatInfo.avatar,
                                        last_message: {
                                            ...chatInfo.last_message,
                                            // @ts-ignore
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
                            }catch (e) {

                            }

                        }
                    })
                }
            })
        }
    }
})
