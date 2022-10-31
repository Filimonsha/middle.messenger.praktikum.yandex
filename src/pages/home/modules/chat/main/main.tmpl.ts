import {Template} from "../../../../../utils/framework/templateEngine/template";
import "./main.scss";

export const mainTemplate = new Template(`
       <div class="main">
        {{ !Header! }}
        {{ !Messages! }}
        {{ !ControlPanel! }}
        </div>
`);
