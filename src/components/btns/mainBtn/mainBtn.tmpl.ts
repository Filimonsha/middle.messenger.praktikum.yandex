import { Template } from '../../../utils/framework/templateEngine/template';
import '../btns.scss';

export const mainBtnTemplate = new Template(`
<button type="{{!type!}}" class="btn btn__main login_btn__main">
    <span class="btn_text">
        {{text}}
    </span>
</button>
`);
