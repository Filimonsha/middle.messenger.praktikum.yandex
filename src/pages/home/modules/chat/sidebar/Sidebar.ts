import {Block, Props} from "../../../../../utils/framework/block";
import { sidebarTemplate } from "./sidebar.tmpl";
import { ChatItem } from "../components/chatItem";
import {ChatItemState} from "../components/chatItem/ChatItem";

const chats:Array<ChatItemState> = [
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg: " some long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg: " some long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg:
      " some long text or not long a dnot know u " +
      "know what i mean some long text or not long a dnot know u " +
      "know what i meansome long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg: " some long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg: " some long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
  {
    imgSrc: "",
    userName: "Oleg",
    lastMsg: " some long text or not long a dnot know u know what i mean",
    lastMsgTime: `${new Date(12414).getHours()}:20`,
    countOfNotification: 2,
  },
];

const sidebarState = {
  state: {
    chatItems: chats.map(
      (chatData) =>
        new ChatItem({
          state: chatData,
        })
    ),
  },
};
type SidebarState = {
  chatItems:ChatItem[]
}
export class Sidebar extends Block<SidebarState> {
  constructor(props:Props<SidebarState>) {
    super(sidebarTemplate, props);
  }
}
const SidebarComponent = new Sidebar(sidebarState);
export default SidebarComponent;
