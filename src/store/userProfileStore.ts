import stateManager from "../utils/framework/applicationStateManager";
import authApi from "../utils/api/authApi";
import {UserInfo} from "../utils/api/types/auth";
import {ChangeUserInfo, ChangeUserPassword} from "../utils/api/types/user";
import userApi from "../utils/api/userApi";
import router from "../index";
import {baseUrl, resources} from "../utils/api/const/routes";

type UserProfileInit = {
    userInfo: UserInfo | null,
    userWantChangeInfo: boolean,
    userWantChangePassword: boolean,
    changePasswordStatus: string,
    avatarStatus: string,
}

export const userProfileStore = stateManager.registerStore<UserProfileInit>({
    name: "userProfileStore",
    initialState: {
        userInfo: null,
        userWantChangeInfo: false,
        userWantChangePassword: false,
        changePasswordStatus: "",
        avatarStatus: ""
    },
    reducers: {
        getUserInfo: (state) => {
            authApi.getUserInfo().then((res: any) => {
                if (res.status === 200) {
                    try {
                        state.userInfo = {
                            ...JSON.parse(res.response),
                            avatar: JSON.parse(res.response).avatar ? baseUrl + resources + JSON.parse(res.response).avatar : require("../../static/img/default-image.jpeg")
                        }
                        localStorage.setItem("currentUserId", state.userInfo?.id.toString() || "")
                    } catch (e) {

                    }
                }
            })
                .catch(error => {

                })
        },
        setUserWantChangeInfo: (state, data: boolean) => {
            state.userWantChangeInfo = data
        },
        setUserWantChangePassword: (state, data: boolean) => {
            state.userWantChangePassword = data
        },
        exit: () => {
            authApi.logout().then(() => {
                localStorage.removeItem("currentUserId")
                router.go("/")

            })
                .catch(error => console.log(error))
        },
        changeUserInfo: (state, data: ChangeUserInfo) => {
            userApi.changeUserInfo(data).then((res: any) => {
                if (res.status === 200) {
                    try {
                        state.userInfo = JSON.parse(res.response)
                        state.userWantChangeInfo = false
                    } catch (e) {

                    }

                }
            })
        },
        changeUserPassword: (state, data: ChangeUserPassword) => {
            userApi.changeUserPassword(data).then((res: any) => {
                if (res.status === 200) {
                    state.userWantChangePassword = false
                    state.changePasswordStatus = "Password successfully changed"
                    const timeout = setTimeout(() => {
                        state.changePasswordStatus = ""
                    }, 2000)
                    clearTimeout(timeout)

                } else if (res.status === 400) {
                    state.changePasswordStatus = res.response.reason
                }
            })
                .catch(error => console.log(error))

        },
        updateAvatar: (state, data: FormData) => {
            userApi.changeUserAvatar(data).then((res: any) => {
                if (res.status === 200) {
                    try {
                        state.userInfo = JSON.parse(res.response)
                        state.userInfo = {
                            ...JSON.parse(res.response),
                            avatar: baseUrl + resources + JSON.parse(res.response).avatar
                        }
                        console.log("Hash",state.userInfo)
                    } catch (e) {

                    }
                } else {
                    try {
                        state.avatarStatus = JSON.parse(res).response

                    } catch (e) {

                    }
                }
            })
                .catch(error => console.log(error))

        }
    }
})
