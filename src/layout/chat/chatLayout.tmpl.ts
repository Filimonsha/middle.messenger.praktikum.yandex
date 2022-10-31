import { Template } from "../../utils/framework/templateEngine/template";
import "./chat.scss";

export const chatLayoutTemplate = new Template(`
   <div class="chat">
      {{!Sidebar!}}
      {{!Main!}}

   </div>
   
`);
