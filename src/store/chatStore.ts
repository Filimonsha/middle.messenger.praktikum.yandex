import stateManager from "../utils/framework/applicationStateManager";
import {AddUsersToChat} from "../utils/api/types/chat";
import chatsApi from "../utils/api/chatsApi";
import userApi from "../utils/api/userApi";
import {messengerStore} from "./messengerStore";
import {UserInfo} from "../utils/api/types/auth";

type ChatStoreInit = {
    userWantAddUsers: boolean,
    userWantDeleteUsers: boolean
    statusText: string
}

const initialState: ChatStoreInit = {
    userWantAddUsers: false,
    userWantDeleteUsers: false,
    statusText: ""
}

export const chatStore = stateManager.registerStore({
    name: "chatStore",
    initialState,
    reducers: {
        addUsersToChat: (state, data: string) => {
            if (data) {
                userApi.searchUserByLogin(data).then((res: any) => {
                    if (res.status === 200) {
                        if (res.response.length > 0) {
                            chatsApi.addUsers({
                                chatId: stateManager.getState()?.currentChatId,
                                users: JSON.parse(res.response).map((user: UserInfo) => user.id)
                            }).then((res: any) => {
                                state.statusText = "User successfully added"
                                const timeout = setTimeout(() => {
                                    state.statusText = ""
                                }, 2000)
                                clearTimeout(timeout)
                            })
                        } else {
                            state.statusText = "No users with this Login"
                        }

                    } else {
                        state.statusText = JSON.parse(res.response).reason
                    }
                })
            } else {
                state.statusText = "Логин не может быть пустым!"
            }
        },
        deleteUsersFromChat: (state, data) => {
            userApi.searchUserByLogin(data).then((res: any) => {
                if (res.status === 200) {
                    if (res.response.length > 0) {
                        chatsApi.deleteUsers({
                            chatId: stateManager.getState()?.currentChatId,
                            users: JSON.parse(res.response).map((user: UserInfo) => user.id)
                        }).then(() => {
                            state.statusText = "User successfully removed"
                            const timeout = setTimeout(() => {
                                state.statusText = ""
                            }, 2000)
                            clearTimeout(timeout)
                        })
                    } else {
                        state.statusText = "No users with this Login"
                    }

                } else {
                    state.statusText = JSON.parse(res.response).reason
                }
            })
        },
        setUserWantDeleteUsers: (state, data: boolean) => {
            state.userWantDeleteUsers = data
        },
        setUserWantAddUsers: (state, data: boolean) => {
            state.userWantAddUsers = data
        },
    }
})
