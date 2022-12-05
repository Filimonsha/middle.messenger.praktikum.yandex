import {Block, Props} from "../../../../../utils/framework/block";
import {sidebarTemplate} from "./sidebar.tmpl";
import {ChatItem} from "../components/chatItem";
import {connect} from "../../../../../utils/framework/applicationStateManager/utils/connect";
import {messengerStore} from "../../../../../store/messengerStore";
import {MainBtn} from "../../../../../components/btns/mainBtn";
import chatsApi from "../../../../../utils/api/chatsApi";
import {Chat} from "../../../../../utils/api/types/chat";
import {formattedDateInSeconds} from "../../../../../utils/helpers/formateDate";
import {baseUrl, resources} from "../../../../../utils/api/const/routes";


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
            const createChatInputValue = (document.getElementById("CREATE_CHAT_INPUT") as HTMLInputElement )?.value
            messengerStore.reducers.createChat(createChatInputValue)
        }
    }
})


const sidebarState: Props<SidebarState> = {
    state: {
        chatItems: [],
        CreateChatBtn,
        ActionBtn,
        closeModalHandler: () => {
            messengerStore.reducers.setUserWannaCreateNewChat(false)
        }
    },
};


const mapStateToProps = (state:any) => {
    return {
        userWannaCreateNewChat: state.userWannaCreateNewChat
    }
}
const sidebar = new Sidebar(sidebarState)

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
    .catch(error => console.log(error))

const SidebarComponent = connect(sidebar, mapStateToProps);
export default SidebarComponent;
