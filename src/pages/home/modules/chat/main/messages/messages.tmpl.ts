import { Template } from "../../../../../../utils/framework/templateEngine/template";
import "./messages.scss";
import { Message } from "../../components/message";

export const messagesTemplate = new Template(`
    <div class="messages"> 
        {{ !messages! }}
    </div>
`);
