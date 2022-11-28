import stateManager from "../utils/framework/applicationStateManager";
import authApi from "../utils/api/authApi";
import {LoginData} from "../utils/api/types/auth";
import chatsApi from "../utils/api/chatsApi";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import {messengerStore} from "./messengerStore";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";
import router from "../index";
import {Chat} from "../utils/api/types/chat";
import {formattedDateInSeconds} from "../utils/helpers/formateDate";
import {baseUrl, resources} from "../utils/api/const/routes";

type LoginStoreInit = {
    name: string
}
const initialState: LoginStoreInit = {
    name: "Hi"
}
export const loginStore = stateManager.registerStore({
    name: "loginStore",
    initialState,
    reducers: {
        log: (state, data) => {
            state.name = data
        },
        login: (state, data: LoginData) => {
            authApi.signin(data).then((res: any) => {
                if (res.status === 200) {

                    chatsApi.getChats().then( (chatRes:any) => {
                        if (chatRes.status === 200) {
                            try{
                                const chats: Array<ChatItem> = JSON.parse(chatRes.response).map((chatInfo: Chat) => new ChatItem({
                                    state: {
                                        ...chatInfo,
                                        avatar:baseUrl + resources + chatInfo.avatar || require("../../static/img/default-image.jpeg"),
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
                                localStorage.setItem("currentUserId", "124")
                                router.go("/messenger")
                            } catch (error){
                            }

                        }
                    })

                } else {
                    if (res.status === 401) {
                        console.log("Данные не верны")
                    }
                }
            })
                .catch(error => console.log(error))
        },
    }
})

