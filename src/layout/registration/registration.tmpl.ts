import {Input} from "../../components/input";
import "./registration.scss"
import {Button} from "../../components/btns/button";
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
        btnType:"btn__main login_btn__main",
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
                ${Button.compile(registrationData.mainBtn)}
                ${Button.compile(registrationData.defaultBtn)}
            </div>
            </div>
             
        </div>
`)
