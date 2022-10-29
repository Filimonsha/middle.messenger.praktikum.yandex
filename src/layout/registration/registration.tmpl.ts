import "./registration.scss";
import { Template } from "../../utils/framework/templateEngine/template";

export const registrationLayoutTemplate = new Template(`
    <div class="registration">
             <div class="registration_container">
             <h1 class="registration_title">Регистрация</h1>
            <form class="registration_form">
                {{!inputs!}}
                <div class="registration_buttons">
                    {{!MainButton!}}
                    {{!DefaultButton!}}
                </div>
            </form> 
            </div>
             
        </div>
`);
