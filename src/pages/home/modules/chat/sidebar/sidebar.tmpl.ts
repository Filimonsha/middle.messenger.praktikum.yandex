import { Template } from "../../../../../utils/templateEngine/template";
import "./sidebar.scss"
import { ChatItem } from "../components/chatItem/index";

const sidebarData = {
  chats:[{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u " +
        "know what i mean some long text or not long a dnot know u " +
        "know what i meansome long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },{
      imgSrc:"",
    userName:"Oleg",
    lastMsg:" some long text or not long a dnot know u know what i mean",
    lastMsgTime:new Date(12414).getHours()+ ":20",
    countOfNotification: 2
  },
  ]
}

export const sidebarTemplate = new Template(`
<div class="sidebar">
                <div class="chat_chats">
                        ${sidebarData.chats.map(chat => ChatItem.compile(chat)).join("")}
                </div>
                <input type="text" class="sidebar_search">
            </div>
`)
