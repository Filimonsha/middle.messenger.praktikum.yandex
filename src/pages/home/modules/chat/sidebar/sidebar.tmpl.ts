import {Template} from '../../../../../utils/framework/templateEngine/template';
import './sidebar.scss';

export const sidebarTemplate = new Template(`
<div class="sidebar">
    <div class="sidebar_wrapper">
           <div class="sidebar_chats">
            {{!chatItems!}}
        </div>
        {{!CreateChatBtn!}} 
    </div>
     <div class="header_control-chat-users modal {{ if (!userWannaCreateNewChat!) then {d-block}  }} ">
          <div class="modal-content ">
            <span class="close" on-click={{closeModalHandler}}>&times;</span>
            <input id="CREATE_CHAT_INPUT" type="text">
            <span>{{!statusText!}}</span>
            {{!ActionBtn!}}
          </div>
          </div>
</div>
`);
