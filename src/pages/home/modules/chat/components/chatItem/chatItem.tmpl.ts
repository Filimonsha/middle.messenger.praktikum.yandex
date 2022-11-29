import {Template} from '../../../../../../utils/framework/templateEngine/template';
import './chatItem.scss';

export const chatItemTemplate = new Template(
    `
        <div class="chat-item">
            <div class="chat-item_img">
                      <img src={{!avatar!}} alt="avatar">
            </div>
            <div class="chat-item_right-part">
                        <div class="chat-item_desc">
                <div class="chat-item_msg">
                    <span class="chat-item_chat-name">{{ !title!}}</span>
                    <span class="chat-item_last-msg">{{ !last_message.content! }}</span>
                </div>
            </div>
            <div class="chat-item_info">
                <div class="chat-item_time  ">
                    {{ !last_message.time! }}
                </div>
                <div class="chat-item_notification {{ if (!unread_count!) then {d-block} }} ">
                    {{ !unread_count! }}
                </div>
            </div>
            </div>
        </div>
    `,
);
