import {Block, Props} from "../../utils/framework/block";
import {userProfileLayoutTemplate} from "./userProfile.tmpl";
import {connect} from "../../utils/framework/applicationStateManager/utils/connect";
import {userProfileStore} from "../../store/userProfileStore";
import {MainBtn} from "../../components/btns/mainBtn";
import {DefaultBtn} from "../../components/btns/defaultBtn";
import {Input, InputState} from "../../components/input";
import {loginAndPasswordValidationHandle} from "../login/Login";
import {Validator} from "../../utils/helpers/validator/validator";
import {ChangeUserInfo, ChangeUserPassword} from "../../utils/api/types/user";
import stateManager from "../../utils/framework/applicationStateManager";

const validator = new Validator();

type UserProfileState = {}

class UserProfile extends Block<UserProfileState> {

    constructor(props: Props<UserProfileState>) {
        super(userProfileLayoutTemplate, props);
        userProfileStore.reducers.getUserInfo()

    }

}

const changePasswordInputs: Array<Props<InputState>> = [{
    state: {
        labelName: "Старый пароль",
        validatorName: "password",
        placeholder: "Пароль",
        type: "password",
        name: "oldPassword",
        handleBlur({target}) {
            loginAndPasswordValidationHandle.call(this, target, "password")
        },
        handleFocus({target}) {
            loginAndPasswordValidationHandle.call(this, target, "password")
        },
        errors: "",
        value: ""
    },
},
    {
        state: {
            labelName: "Новый пароль",
            validatorName: "password",
            placeholder: "Пароль",
            type: "password",
            name: "newPassword",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "password")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "password")
            },
            errors: "",
            value: ""
        },
    },
]

const changeInfoInputs: Array<Props<InputState>> = [
    {
        state: {
            labelName: "Почта",
            validatorName: "email",
            placeholder: "email",
            type: "text",
            name: "email",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "email")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "email")
            },
            errors: "",
            value: ""
        },
    },
    {
        state: {
            labelName: "Логин",
            validatorName: "login",
            placeholder: "Логин",
            type: "text",
            name: "login",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "login")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "login")
            },
            errors: "",
            value: ""
        },
    }, {
        state: {
            labelName: "Отображаемое имя",
            validatorName: "displayName",
            placeholder: "Отображаемое имя",
            type: "text",
            name: "display_name",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "displayName")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "displayName")
            },
            errors: "",
            value: ""
        },
    }, {
        state: {
            labelName: "Имя",
            validatorName: "firstName",
            placeholder: "Имя",
            type: "text",
            name: "first_name",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "firstName")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "firstName")
            },
            errors: "",
            value: ""
        },
    },
    {
        state: {
            labelName: "Фамилия",
            validatorName: "secondName",
            placeholder: "Фамилия",
            type: "text",
            name: "second_name",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "secondName")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "secondName")
            },
            errors: "",
            value: ""
        },
    },
    {
        state: {
            labelName: "Телефон",
            validatorName: "phone",
            placeholder: "Телефон",
            type: "text",
            name: "phone",
            handleBlur({target}) {
                loginAndPasswordValidationHandle.call(this, target, "phone")
            },
            handleFocus({target}) {
                loginAndPasswordValidationHandle.call(this, target, "phone")
            },
            errors: "",
            value: ""
        },
    },
];

const ChangeInfoBtn = new MainBtn({
    state: {
        type: "button",
        text: "Изменить данные"
    },
    events: {
        click() {
            userProfileStore.reducers.setUserWantChangeInfo(true)
        }
    }
})
const ChangePasswordBtn = new MainBtn({
    state: {
        type: "button",
        text: "Change password",
    },
    events: {
        click() {
            userProfileStore.reducers.setUserWantChangePassword(true)
        }
    }
})

const ChangeAvatarBtn = new MainBtn({
    state: {
        type: "button",
        text: "Save button",
    },
    events: {
        click() {
            const avatarInput = document.getElementById("AVATAR_FILE") as HTMLInputElement
            const formData = new FormData();
            console.log(avatarInput.files)
            if (avatarInput?.files) {
                formData.append('avatar', avatarInput?.files[0]);
                userProfileStore.reducers.updateAvatar(formData)
            }

        }
    }
})

const ExitBtn = new DefaultBtn({
    state: {
        type: "button",
        text: "Exit",
    },
    events: {
        click() {
            userProfileStore.reducers.exit()
        }
    }
})

const SaveInfoBtn = new MainBtn({
    state: {
        type: "submit",
        text: "Save"
    },
})
const SavePasswordBtn = new MainBtn({
    state: {
        type: "submit",
        text: "Save"
    },
})
const ReturnInfoBtn = new MainBtn({
    state: {
        type: "button",
        text: "Return"
    },
    events: {
        click() {
            userProfileStore.reducers.setUserWantChangeInfo(false)
        }
    }
})
const ReturnPasswordBtn = new MainBtn({
    state: {
        type: "button",
        text: "Return"
    },
    events: {
        click() {
            userProfileStore.reducers.setUserWantChangePassword(false)
        }
    }
})

const userProfileData = {
    state: {
        ChangeInfoBtn,
        ChangePasswordBtn,
        ExitBtn,
        SaveInfoBtn,
        ReturnInfoBtn,
        ReturnPasswordBtn,
        SavePasswordBtn,
        ChangeAvatarBtn,
        changePasswordInputs: changePasswordInputs.map(info => new Input(info)),
        changeInfoInputs: changeInfoInputs.map(info => new Input(info)),

    },
    events: {
        submit(e: SubmitEvent) {
            e.preventDefault()

            const changePasswordHandler = () => {
                let dataIsValid = true;
                const data: ChangeUserPassword = {
                    oldPassword: "",
                    newPassword: ""
                }
                this.getComponentChildren().changePasswordInputs.forEach((input: Input) => {
                    const currentLoginInputState = input.getState();

                    if (validator.validate(
                        currentLoginInputState.validatorName,
                        input.getCompiledElement()?.querySelector("input")?.value || ""
                    )) {
                        dataIsValid = false
                    } else {
                        data[currentLoginInputState.name as keyof typeof data] = currentLoginInputState.value
                    }
                });
                if (dataIsValid) {
                    userProfileStore.reducers.changeUserPassword(data)
                }
            }

            const changeUserInfoHandler = () => {
                let dataIsValid = true;
                const data: ChangeUserInfo = {
                    login: "",
                    email: "",
                    phone: "",
                    first_name: "",
                    second_name: "",
                    display_name: ""
                }
                this.getComponentChildren().changeInfoInputs.forEach((input: Input) => {
                    const currentLoginInputState = input.getState();

                    if (validator.validate(
                        currentLoginInputState.validatorName,
                        input.getCompiledElement()?.querySelector("input")?.value || ""
                    )) {
                        dataIsValid = false
                    } else {
                        data[currentLoginInputState.name as keyof typeof data] = currentLoginInputState.value
                    }
                });
                if (dataIsValid) {
                    userProfileStore.reducers.changeUserInfo(data)
                }
            }


            if (stateManager.getState().userWantChangeInfo) {
                changeUserInfoHandler()
            } else if (stateManager.getState().userWantChangePassword) {
                changePasswordHandler()
            }
        }

    }
}

const mapStateToProps = (state:any) => {
    return {
        userInfo: state.userInfo,
        userWantChangeInfo: state.userWantChangeInfo,
        userWantChangePassword: state.userWantChangePassword,
        changePasswordStatus: state.changePasswordStatus,
        avatarStatus: state.avatarStatus,
        userWantChanges: state.userWantChangeInfo || state.userWantChangePassword,
    }
}

export const UserProfileLayout = connect(new UserProfile(userProfileData), mapStateToProps)
