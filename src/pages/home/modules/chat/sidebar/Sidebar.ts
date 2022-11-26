import {Block, Props} from "../../../../../utils/framework/block";
import {sidebarTemplate} from "./sidebar.tmpl";
import {ChatItem} from "../components/chatItem";
import {connect} from "../../../../../utils/framework/applicationStateManager/utils/connect";
import {messengerStore} from "../../../../../store/messengerStore";
import {MainBtn} from "../../../../../components/btns/mainBtn";
import chatsApi from "../../../../../utils/api/chatsApi";


export class Sidebar extends Block<SidebarState> {
    constructor(props: Props<SidebarState>) {
        super(sidebarTemplate, props);

    }
}

const CreateChatBtn = new MainBtn({
    state: {
        text: "Create chat",
        type: "button",
    },
    events: {
        click() {
            messengerStore.reducers.setUserWannaCreateNewChat(true)
        }
    }
})

type SidebarState = {
    chatItems: ChatItem[],
    CreateChatBtn: MainBtn,
    closeModalHandler: Function
    ActionBtn: MainBtn
}
const ActionBtn = new MainBtn({
    state: {
        text: "Create new chat",
        type: "button"
    },
    events: {
        click() {
            const createChatInputValue = document.getElementById("CREATE_CHAT_INPUT")?.value
            messengerStore.reducers.createChat(createChatInputValue)
        }
    }
})



const sidebarState: Props<SidebarState> = {
    state: {
        chatItems:[1] ,
        CreateChatBtn,
        ActionBtn,
        closeModalHandler: () => {
            messengerStore.reducers.setUserWannaCreateNewChat(false)
        }
    },
};


const mapStateToProps = state => {
    return {
        userWannaCreateNewChat: state.userWannaCreateNewChat
    }
}
const sidebar = new Sidebar(sidebarState)

chatsApi.getChats().then(res =>{
    if (res.status === 200) {
        const chats = JSON.parse(res.response).map(chatInfo =>new ChatItem({
            state:chatInfo,
            events:{
                click(){
                    messengerStore.reducers.setCurrentChatId(chatInfo.id)
                }
            }
        }))
        sidebar.updateState("chatItems",chats)
    }
})
const SidebarComponent = connect(sidebar, mapStateToProps);
export default SidebarComponent;
