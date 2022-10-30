import { Block } from "../../utils/framework/block";
import { registrationLayoutTemplate } from "./registration.tmpl";
import { Input } from "../../components/input";
import { Validator } from "../../utils/helpers/validator/validator";
import { MainBtn } from "../../components/btns/mainBtn";
import { DefaultBtn } from "../../components/btns/defaultBtn";
import { loginAndPasswordValidationHandle } from "../login/Login";

const registrationInputs = [
  {
    state: {
      labelName: "Почта",
      validatorName: "email",
      inputValue: "Email",
      type: "text",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "email");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "email");
      },
    },
  },
  {
    state: {
      labelName: "Логин",
      validatorName: "login",

      inputValue: "Логин",
      type: "text",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "login");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "login");
      },
    },
  },
  {
    state: {
      labelName: "Имя",
      validatorName: "firstName",
      inputValue: "Имя",
      type: "text",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "firstName");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "firstName");
      },
    },
  },
  {
    state: {
      labelName: "Фамилия",
      validatorName: "secondName",
      inputValue: "Email",
      type: "text",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "secondName");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "secondName");
      },
    },
  },
  {
    state: {
      labelName: "Телефон",
      validatorName: "phone",
      inputValue: "Email",
      type: "text",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "phone");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "phone");
      },
    },
  },
  {
    state: {
      labelName: "Пароль",
      validatorName: "password",
      inputValue: "Email",
      type: "password",
    },
    events: {
      blur({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "password");
      },
      focus({ target }) {
        loginAndPasswordValidationHandle.call(this, target, "password");
      },
    },
  },
  {
    state: {
      labelName: "Пароль (ещё раз)",
      validatorName: "password",
      inputValue: "Email",
      type: "password",
    },
  },
];
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
    click: (e) => console.log("Пользователь нажал на войти"),
  },
};

class RegistrationLayout extends Block {
  constructor(props) {
    super(registrationLayoutTemplate, props);
  }
}

const registrationProps = {
  state: {
    MainButton: new MainBtn(mainBtnData),
    DefaultButton: new DefaultBtn(defaultBtnData),
    inputs: registrationInputs.map((inputState) => new Input(inputState)),
  },
  events: {
    submit(e) {
      e.preventDefault();
      this.getComponentChildren().inputs.forEach((login) => {
        const currentLoginInputState = login.getState();
        console.error(
          validator.validate(
            currentLoginInputState.validatorName,
            currentLoginInputState.inputValue
          )
        );
      });
    },
  },
};
export const RegistrationLayoutComponent = new RegistrationLayout(
  registrationProps
);
