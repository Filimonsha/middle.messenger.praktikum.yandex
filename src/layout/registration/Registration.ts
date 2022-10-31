import {Block, Props} from "../../utils/framework/block";
import { registrationLayoutTemplate } from "./registration.tmpl";
import {Input, InputState} from "../../components/input";
import { Validator } from "../../utils/helpers/validator/validator";
import {MainBtn, MainBtnState} from "../../components/btns/mainBtn";
import {DefaultBtn, DefaultBtnState} from "../../components/btns/defaultBtn";
import { loginAndPasswordValidationHandle } from "../login/Login";
const validator = new Validator();

const registrationInputs:Array<Props<InputState>> = [
  {
    state: {
      labelName: "Почта",
      validatorName: "email",
      placeholder: "email",
      type: "text",
      name:"email",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "email")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "email")
      },
      errors: "",
      value:""
    },
  },
  {
    state: {
      labelName: "Логин",
      validatorName: "login",
      placeholder: "Логин",
      type: "text",
      name:"login",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "login")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "login")
      },
      errors: "",
      value:""
    },
  },
  {
    state: {
      labelName: "Имя",
      validatorName: "firstName",
      placeholder: "Имя",
      type: "text",
      name:"first_name",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "firstName")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "firstName")
      },
      errors: "",
      value:""
    },


  },
  {
    state: {
      labelName: "Фамилия",
      validatorName: "secondName",
      placeholder: "Фамилия",
      type: "text",
      name:"second_name",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "secondName")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "secondName")
      },
      errors: "",
      value:""
    },
  },
  {
    state: {
      labelName: "Телефон",
      validatorName: "phone",
      placeholder: "Телефон",
      type: "text",
      name:"phone",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "phone")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "phone")
      },
      errors: "",
      value:""
    },
  },
  {
    state: {
      labelName: "Пароль",
      validatorName: "password",
      placeholder: "Пароль",
      type: "password",
      name:"password",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "password")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "password")
      },
      errors: "",
      value:""
    },
  },
  {
    state: {
      labelName: "Пароль (ещё раз)",
      validatorName: "password",
      placeholder: "Пароль",
      type: "password",
      name:"password",
      handleBlur({target}) {
        loginAndPasswordValidationHandle.call(this, target, "password")
      },
      handleFocus({target}) {
        loginAndPasswordValidationHandle.call(this, target, "password")
      },
      errors: "",
      value:""
    },
  },
];
const mainBtnData:Props<MainBtnState> = {
  state: {
    type: "submit",
    text: "Enter",
  },

};
const defaultBtnData:Props<DefaultBtnState> = {
  state: {
    type: "button",
    text: "Not register yet ?",
  },
  events: {
    click: (e) => console.log("Пользователь нажал на войти"),
  },
};

type RegistrationLayoutState = {
  MainButton:  MainBtn,
  DefaultButton: DefaultBtn,
  inputs: Array<Input>,
}



class RegistrationLayout extends Block<RegistrationLayoutState> {
  constructor(props:Props<RegistrationLayoutState>) {
    super(registrationLayoutTemplate, props);
  }
}

const registrationProps:Props<RegistrationLayoutState> = {
  state: {
    MainButton: new MainBtn(mainBtnData),
    DefaultButton: new DefaultBtn(defaultBtnData),
    inputs: registrationInputs.map((inputState) => new Input(inputState)),
  },
  events: {
    submit(e:SubmitEvent) {
      e.preventDefault();
      this.getComponentChildren().logins.forEach((login: Input) => {
        const currentLoginInputState = login.getState();
        if (validator.validate(
            currentLoginInputState.labelName,
            login.getCompiledElement()?.querySelector("input")?.value || ""
        )) {
          console.error(
              validator.validate(
                  currentLoginInputState.labelName,
                  login.getCompiledElement()?.querySelector("input")?.value || ""
              )
          );
        } else {
          console.log(login.getCompiledElement()?.querySelector("input")?.value)
        }
      });
    },
  },
};
export const RegistrationLayoutComponent = new RegistrationLayout(
  registrationProps
);
