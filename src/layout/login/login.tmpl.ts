import "./login.scss";
import { Template } from "../../utils/framework/templateEngine/template";

export const loginLayoutTemplate = new Template(`
    <div class="login">
        <div class="login_container">
            <h1 class="login_title">Вход</h1>
            <form class="login_form">
            {{!logins!}}
             
             <div class="login_buttons">
                {{!MainButton!}}
                {{!DefaultButton!}}
            </div>
            </form>
        </div>
    </div>
`);
