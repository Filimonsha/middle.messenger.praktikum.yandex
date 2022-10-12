import {Input} from "../../components/input";
import {MainBtn} from "../../components/btns/mainBtn";
import {DefaultBtn} from "../../components/btns/defaultBtn";
import "./login.scss"
import {LOGIN} from "../../const/DOMElements";
import {Template} from "../../utils/templateEngine/template";
const loginData = {
    logins: [
        {
            labelName: "login",
            inputValue: "some text"
        }, {
            labelName: "password",
            inputValue: "another text"
        },
    ],
    defaultBtn:{
        text:"Еще нет аккаунта ?"
    },mainBtn:{
        text:"Войти"
    }
}

export const loginLayoutTemplate = new Template(`
    <div class="login">
        <div class="login_container">
            <h1 class="login_title">Вход</h1>
            <form class="login_form">
            ${
                loginData.logins.map(login =>Input.compile(login)).join("")
            }
              
            </form>
            <div class="login_buttons">
                ${MainBtn.compile(loginData.mainBtn)}
                ${DefaultBtn.compile(loginData.defaultBtn)}
            </div>
        </div>

    </div>
`)
