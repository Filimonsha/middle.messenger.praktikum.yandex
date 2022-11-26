import { Template } from '../../../utils/framework/templateEngine/template';
import '../btns.scss';

export const defaultBtnTemplate = new Template(
  `
    <button type={{!type!}} class="btn">
       <span class="btn_text">
         {{!text!}}
        </span>
     </button>
    `,
);
