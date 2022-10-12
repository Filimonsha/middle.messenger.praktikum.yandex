import { Template } from "../../../../../utils/templateEngine/template";
import {Header} from "./header";
import "./main.scss"
import {Messages} from "./messages";
import {ControlPanelTemplate} from "./controlPanel/controlPanel.tmpl";
const mainData = {
       userName:"Oleg"
}

export const mainTemplate = new Template(`
       <div class="main">
        ${Header.compile(mainData)}
        ${Messages.compile()}
        ${ControlPanelTemplate.compile()}
        </div>
`)
