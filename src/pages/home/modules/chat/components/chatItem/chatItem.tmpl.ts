import {Template} from "../../../../../../utils/templateEngine/template";
import "./chatItem.scss"
export const chatItemTemplate = new Template(
    `
        <div class="chat-item">
        <div class="chat-item_img">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favatarko.ru%2Fkartinka%2F32117&psig=AOvVaw0qWlT3XgCtRGL8gijD5Mev&ust=1665438264092000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDNrZKP1PoCFQAAAAAdAAAAABAE" alt="avatar">
        </div>
        <div class="chat-item_desc">
            <div class="chat-item_msg">
                <span class="chat-item_user-name">{{ !userName!}}</span>
                <span class="chat-item_last-msg">{{ !lastMsg! }}</span>
            </div>
        </div>
        <div class="chat-item_info">
            <time datetime={{!lastMsgTime!}} class="chat-item_time">
                {{ !lastMsgTime! }}
            </time>
            <div class="chat-item_notification">
                {{ !countOfNotification! }}
            </div>
        </div>
    </div>
    `
)
