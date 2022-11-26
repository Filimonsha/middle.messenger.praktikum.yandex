import stateManager from "../utils/framework/applicationStateManager";
import authApi from "../utils/api/authApi";
import {LoginData} from "../utils/api/types/auth";
import chatsApi from "../utils/api/chatsApi";
import {ChatItem} from "../pages/home/modules/chat/components/chatItem";
import {messengerStore} from "./messengerStore";
import sidebar from "../pages/home/modules/chat/sidebar/Sidebar";
import router from "../index";

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
        login: (state, data:LoginData) => {
            authApi.signin(data).then((res:any) =>{
                if (res.status === 200){

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
                }else {
                    if (res.status === 401){
                        console.log("Данные не верны")
                    }
                }
            })
                .catch(error =>console.log(error))
        },
    }
})

