import {Input} from "../../components/input";
import {Button} from "../../components/btns/button";
import "./login.scss"
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
        btnType:"btn__main login_btn__main",
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
                ${Button.compile(loginData.mainBtn)}
                ${Button.compile(loginData.defaultBtn)}
            </div>
        </div>

    </div>
`)
