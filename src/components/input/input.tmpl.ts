import './input.scss';
import { Template } from '../../utils/framework/templateEngine/template';

export const inputTemplate = new Template(`
     <label class="input__with-label">
          <span class="input__with-label_label">
            {{ !labelName !}}
          </span>
          <div class="input__with-label_warning d-block ">
                {{ !errors! }}
          </div>
          <input name="{{!name!}}" value="{{!value!}}" on-focus={{handleFocus}} on-blur={{handleBlur}} type="{{!type !}}" placeholder={{!placeholder!}}  class="input__with-label_input" type="text" name="login">
    </label>
`);
