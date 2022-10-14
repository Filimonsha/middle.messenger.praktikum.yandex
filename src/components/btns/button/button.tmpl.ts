import {Template} from "../../../utils/templateEngine/template";
import "../btns.scss"
export const btnTemplate = new Template (`
<button class="btn {{!btnType!}} ">
    <span class="btn_text">
        {{!text!}}
    </span>
</button>
`)

