import { Block } from "../../utils/framework/block";
import { loginLayoutTemplate } from "./login.tmpl";
import { Validator } from "../../utils/helpers/validator/validator";
import { Input } from "../../components/input";
import { MainBtn } from "../../components/btns/mainBtn";
import { DefaultBtn } from "../../components/btns/defaultBtn";

class LoginLayout extends Block {
  constructor(props) {
    super(loginLayoutTemplate, props);
  }
}

const validator = new Validator();
const mainBtnData = {
  state: {
    type: "submit",
    text: "Enter",
  },
  events: {
    submit: (e) => {
      console.log("Submit");
    },
  },
};
const defaultBtnData = {
  state: {
    type: "button",
    text: "Not register yet ?",
  },
  events: {
    click: (e) => console.log("Пользователь нажал на регистрацию"),
  },
};

export function loginAndPasswordValidationHandle(target, stateName) {
  console.log(validator.validate(stateName, target.value));
  this.updateState("inputValue", target.value);
}

const loginData = {
  state: {
    logins: [
      new Input({
        state: {
          labelName: "login",
          inputValue: "some text",
        },
        events: {
          blur({ target }) {
            loginAndPasswordValidationHandle.call(this, target, "login");
          },
          focus({ target }) {
            loginAndPasswordValidationHandle.call(this, target, "login");
          },
        },
      }),
      new Input({
        state: {
          labelName: "password",
          inputValue: "another text",
        },
        events: {
          blur({ target }) {
            loginAndPasswordValidationHandle.call(this, target, "password");
          },
          focus({ target }) {
            loginAndPasswordValidationHandle.call(this, target, "password");
          },
        },
      }),
    ],
    MainButton: new MainBtn(mainBtnData),
    DefaultButton: new DefaultBtn(defaultBtnData),
  },
  events: {
    submit(e) {
      e.preventDefault();
      console.log(this.getComponentChildren());
      this.getComponentChildren().logins.forEach((login) => {
        const currentLoginInputState = login.getState();
        console.error(
          validator.validate(
            currentLoginInputState.labelName,
            currentLoginInputState.inputValue
          )
        );
      });
    },
  },
};
export const LoginLayoutComponent = new LoginLayout(loginData);
