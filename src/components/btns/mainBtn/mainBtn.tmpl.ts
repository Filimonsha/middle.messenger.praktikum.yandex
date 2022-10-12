import {Template} from "../../../utils/templateEngine/template";
import "../btns.scss"
export const mainBtnTemplate = new Template (`
<button class="btn btn__main login_btn__main">
    <span class="btn_text">
        {{text}}
    </span>
</button>
`)

