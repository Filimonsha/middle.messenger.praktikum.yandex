import {Template} from '../../../../../utils/framework/templateEngine/template';
import './sidebar.scss';

export const sidebarTemplate = new Template(`
<div class="sidebar">
        <div class="sidebar_chats">
            {{!chatItems!}}
        </div>
    <input type="text" class="sidebar_search">
    {{!CreateChatBtn!}}
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

//
// // работающий вариант ! с 2й вложенностью вау
// this.element.innerHTML =  document.createElement("div");
//
//
// this.element.innerHTML = this.template.compile(this.componentState)
//
