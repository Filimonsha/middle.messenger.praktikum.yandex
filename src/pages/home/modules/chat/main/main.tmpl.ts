import {Template} from "../../../../../utils/framework/templateEngine/template";
import "./main.scss";

export const mainTemplate = new Template(`
       <div class="main  ">
        <div class="main_wrapper {{ if (!showChat!) then {d-flex} }} ">
                    {{ !Header! }}
            {{ !Messages! }}
            {{ !ControlPanel! }}
        </div>
                   <div class="main_empty {{ if (!showChat!) then {d-none} }}">
             <span>
                Выберите чат, чтобы начатть
            </span>
            </div>
        </div>
`);
