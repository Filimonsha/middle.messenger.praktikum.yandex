import stateManager from "../utils/framework/applicationStateManager";
import authApi from "../utils/api/authApi";
import {UserInfo} from "../utils/api/types/auth";
import {ChangeUserInfo, ChangeUserPassword} from "../utils/api/types/user";
import userApi from "../utils/api/userApi";
import router from "../index";

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
                    if (!(JSON.parse(res.response).avatar)) {
                        state.userInfo = {
                            ...JSON.parse(res.response),
                            avatar: require("../../static/img/default-image.jpeg")
                        }
                    } else {
                        state.userInfo = JSON.parse(res.response)

                    }

                }
            })
        },
        setUserWantChangeInfo: (state, data: boolean) => {
            state.userWantChangeInfo = data
        },
        setUserWantChangePassword: (state, data: boolean) => {
            state.userWantChangePassword = data
        },
        exit: () => {
            authApi.logout()
            router.go("/")
        },
        changeUserInfo: (state, data: ChangeUserInfo) => {
            userApi.changeUserInfo(data).then((res: any) => {
                if (res.status === 200) {
                    state.userInfo = JSON.parse(res.response)
                    state.userWantChangeInfo = false
                    console.log(state)
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
        },
        updateAvatar: (state, data: FormData) => {
            userApi.changeUserAvatar(data).then((res: any) => {
                if (res.status === 200) {
                    state.userInfo = JSON.parse(res).response
                } else {
                    state.avatarStatus = JSON.parse(res).response
                }
            })
        }
    }
})
