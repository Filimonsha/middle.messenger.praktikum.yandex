import { Template } from '../../../../../../utils/framework/templateEngine/template';
import './message.scss';

export const messageTemplate = new Template(`
            <div class="message {{ if ( !user! ==="home") then {message__my} }}">
            <div class="message_info">
                <p class="message_time"></p>
                <div class="message_check">
                    check
                </div>
            </div>
            <p class="message_text">
                {{ !messageText! }}
            </p>
            </div>
    `);
