import {Block, Props} from "../../utils/framework/block";
import {loginLayoutTemplate} from "./login.tmpl";
import {Validator} from "../../utils/helpers/validator/validator";
import {Input} from "../../components/input";
import {MainBtn} from "../../components/btns/mainBtn";
import {DefaultBtn} from "../../components/btns/defaultBtn";

type LoginLayoutState = {
    logins: Array<Input>,
    MainButton: MainBtn,
    DefaultButton: DefaultBtn
}

class LoginLayout extends Block<LoginLayoutState> {
    constructor(props: Props<LoginLayoutState>) {
        super(loginLayoutTemplate, props);
    }
}

const validator = new Validator();
const mainBtnData = {
    state: {
        type: "submit",
        text: "Enter",
    },

};
const defaultBtnData = {
    state: {
        type: "button",
        text: "Not register yet ?",
    },

};

export function loginAndPasswordValidationHandle(target: HTMLInputElement, stateName: string) {
    const errors = validator.validate(stateName, target.value)
    console.log("Wow",target.value,stateName)
    if (errors) {
        this.updateState("value",target.value)
        this.updateState("errors", errors)
    }else{
        this.updateState("value",target.value)
        this.updateState("errors", "")
    }
}

const loginData = {
    state: {
        logins: [
            new Input({
                state: {
                    labelName: "login",
                    validatorName: "login",
                    type: "text",
                    placeholder: "Логин",
                    value:"",
                    errors: "",
                    name:"login",
                    handleBlur({target}) {
                        loginAndPasswordValidationHandle.call(this, target, "login")
                    },
                    handleFocus({target}) {
                        loginAndPasswordValidationHandle.call(this, target, "login")
                    },
                },
            }),
            new Input({
                state: {
                    labelName: "password",
                    validatorName: "password",
                    value:"",
                    type:"password",
                    placeholder: "another text",
                    name:"password",
                    handleBlur({target}) {
                        loginAndPasswordValidationHandle.call(this, target, "password")
                    },
                    handleFocus({target}) {
                        loginAndPasswordValidationHandle.call(this, target, "password")
                    },
                    errors: ""
                },
            }),
        ],
        MainButton: new MainBtn(mainBtnData),
        DefaultButton: new DefaultBtn(defaultBtnData),
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
export const LoginLayoutComponent = new LoginLayout(loginData);
