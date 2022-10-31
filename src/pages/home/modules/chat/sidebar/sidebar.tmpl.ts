import {Template} from '../../../../../utils/framework/templateEngine/template';
import './sidebar.scss';

export const sidebarTemplate = new Template(`
<div class="sidebar">
        <div class="chat_chats">
            {{!chatItems!}}
        </div>
    <input type="text" class="sidebar_search">
</div>
`);
