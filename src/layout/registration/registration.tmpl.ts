import {Input} from "../../components/input";
import "./registration.scss"
import {MainBtn} from "../../components/btns/mainBtn";
import {DefaultBtn} from "../../components/btns/defaultBtn";
import {Template} from "../../utils/templateEngine/template";

const registrationData = {
    inputs: [
        {
            labelName: "Почта",
            inputValue: "Email",
            type: "text",
        }, {
            labelName: "Логин",
            inputValue: "Логин",
            type: "text",
        }, {
            labelName: "Имя",
            inputValue: "Имя",
            type: "text",
        }, {
            labelName: "Фамилия",
            inputValue: "Email",
            type: "text",
        }, {
            labelName: "Телефон",
            inputValue: "Email",
            type: "text",
        }, {
            labelName: "Пароль",
            inputValue: "Email",
            type: "password"
        }, {
            labelName: "Пароль (ещё раз)",
            inputValue: "Email",
            type: "password",
        },
    ],
    mainBtn:{
        text:"Зарегистрироваться"
    },
    defaultBtn:{
        text:"Войти"
    }
}


export const registrationLayoutTemplate = new Template( `
    <div class="registration">
             <div class="registration_container">
             <h1 class="registration_title">Регистрация</h1>
            <form class="registration_form">
                ${registrationData.inputs.map(input=>Input.compile(input))}
            </form> 
             <div class="registration_buttons">
                ${MainBtn.compile(registrationData.mainBtn)}
                ${DefaultBtn.compile(registrationData.defaultBtn)}
            </div>
            </div>
             
        </div>
`)
