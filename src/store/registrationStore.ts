import stateManager from "../utils/framework/applicationStateManager";
import {RegistrationData} from "../utils/api/types/auth";
import authApi from "../utils/api/authApi";
import chatsApi from "../utils/api/chatsApi";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import {messengerStore} from "./messengerStore";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";
import router from "../index";
import {Chat} from "../utils/api/types/chat";
import {formattedDateInSeconds} from "../utils/helpers/formateDate";
import {BASE_URL, RESOURCES} from "../utils/api/const/routes";

export const registrationStore = stateManager.registerStore({
    name: "registrationStore",
    initialState: {},
    reducers: {
        registrate: (state, data: RegistrationData) => {
            authApi.signup(data).then(() => {
                console.log("registrate state",state)

                chatsApi.getChats().then((chatRes:any) =>{
                    if (chatRes.status === 200) {
                        try{
                            const chats: Array<ChatItem> = JSON.parse(chatRes.response).map((chatInfo: Chat) => new ChatItem({
                                state: {
                                    ...chatInfo,
                                    avatar: BASE_URL + RESOURCES + chatInfo.avatar,
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
                            sidebar.updateState("chatItems",chats)
                            localStorage.setItem("currentUserId", "124")

                            router.go("/messenger")
                        }catch (e) {

                        }

                    }
                })


            })
                .catch(error =>console.log(error))
        }
    }
})
