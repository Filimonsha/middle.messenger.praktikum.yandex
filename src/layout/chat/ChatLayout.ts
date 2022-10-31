import {Block, Props} from "../../utils/framework/block";
import {chatLayoutTemplate} from "./chatLayout.tmpl";
import SidebarComponent from "../../pages/home/modules/chat/sidebar/Sidebar";
import {MainComponent} from "../../pages/home/modules/chat/main";

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

export const ChatLayoutComponent = new ChatLayout(chatLayoutProps);
