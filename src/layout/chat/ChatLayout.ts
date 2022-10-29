import { Block } from "../../utils/framework/block";
import { chatLayoutTemplate } from "./chatLayout.tmpl";
import SidebarComponent from "../../pages/home/modules/chat/sidebar/Sidebar";
import { MainComponent } from "../../pages/home/modules/chat/main";

const chatLayoutProps = {
  state: {
    Sidebar: SidebarComponent,
    Main: MainComponent,
  },
};
class ChatLayout extends Block {
  constructor(props) {
    super("div", chatLayoutTemplate, props);
  }
}
export const ChatLayoutComponent = new ChatLayout(chatLayoutProps);
