import {Template} from "../../../../../utils/framework/templateEngine/template";
import "./main.scss";

export const mainTemplate = new Template(`
       <div class="main  ">
        <div class="main_wrapper {{ if (!showChat!) then {d-flex} }} ">
        
             {{!showChat!}}
            {{ !Header! }}
            {{ !Messages! }}
            {{ !ControlPanel! }}
        </div>
        </div>
`);
