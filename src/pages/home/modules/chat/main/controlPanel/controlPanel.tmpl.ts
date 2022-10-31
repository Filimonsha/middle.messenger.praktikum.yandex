import {Template} from "../../../../../../utils/framework/templateEngine/template";
import "./controlPanel.scss";

export const controlPanelTemplate = new Template(`
    <div class="control-panel">
        <form class="control-panel_form">
        <button class="control-panel_btn">
            Option
        </button>
            <input type="text">
            <button type="submit">
                отпр
            </button>
        </form>
    </div>
`);
