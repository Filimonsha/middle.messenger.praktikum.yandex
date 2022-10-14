import "./input.scss"
import {Template} from "../../utils/templateEngine/template";

export const inputTemplate = new Template( `
<div class="login_inputs">
     <label class="input__with-label">
          <span class="input__with-label_label">
            {{ !labelName !}}
          </span>
          <input type="{{ !type !}}" value="{{!inputValue!}}" class="input__with-label_input" type="text" name="login" id="LOGIN">
    </label>
 </div>
`)

