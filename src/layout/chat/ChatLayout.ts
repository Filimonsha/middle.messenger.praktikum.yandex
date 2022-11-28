import {Block, Props} from "../../utils/framework/block";
import {chatLayoutTemplate} from "./chatLayout.tmpl";
import SidebarComponent from "../../pages/home/modules/chat/sidebar/Sidebar";
import {MainComponent} from "../../pages/home/modules/chat/main";
import {connect} from "../../utils/framework/applicationStateManager/utils/connect";
import {userProfileStore} from "../../store/userProfileStore";


const chatLayoutProps = {
    state: {
        Sidebar: SidebarComponent,
        Main: MainComponent,
    },
};
type ChatLayoutState = {
    Sidebar: typeof SidebarComponent,
    Main: typeof MainComponent,
}

class ChatLayout extends Block<ChatLayoutState> {
    constructor(props: Props<ChatLayoutState>) {
        super(chatLayoutTemplate, props);
    }
}

const mapStateToProps = state => {
    return {
        currentChat: state.currentChatId
    }
}

export const ChatLayoutComponent = connect(new ChatLayout(chatLayoutProps), mapStateToProps);
