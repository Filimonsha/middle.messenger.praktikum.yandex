import { Sidebar } from "../../pages/home/modules/chat/sidebar/index";
import { Template } from "../../utils/templateEngine/template";
import "./chat.scss";
import {Main} from "../../pages/home/modules/chat/main";

export const chatLayoutTemplate = new Template(`
   <div class="chat">
      ${ Sidebar.compile() }
      ${ Main.compile() }
   </div>
   
`);
