import { Template } from "../../../../../../utils/framework/templateEngine/template";
import "./messages.scss";

export const messagesTemplate = new Template(`
    <div class="messages"> 
        {{ !messages! }}
    </div>
`);
