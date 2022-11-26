import stateManager from "../utils/framework/applicationStateManager";
import {RegistrationData} from "../utils/api/types/auth";
import authApi from "../utils/api/authApi";
import chatsApi from "../utils/api/chatsApi";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import {messengerStore} from "./messengerStore";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";
import router from "../index";

export const registrationStore = stateManager.registerStore({
    name: "registrationStore",
    initialState: {},
    reducers: {
        registrate: (state, data: RegistrationData) => {
            authApi.signup(data).then(res => {
                console.log(res)

                chatsApi.getChats().then(chatRes =>{
                    if (chatRes.status === 200) {
                        const chats = JSON.parse(chatRes.response).map(chatInfo =>new ChatItem({
                            state:chatInfo,
                            events:{
                                click(){
                                    messengerStore.reducers.setCurrentChatId(chatInfo.id)
                                }
                            }
                        }))
                        sidebar.updateState("chatItems",chats)
                        router.go("/messenger")
                    }
                })


            })
                .catch(error =>console.log(error))
        }
    }
})
