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
                        try {
                            if (res.response.length > 0) {
                                chatsApi.addUsers({
                                    chatId: stateManager.getState()?.currentChatId,
                                    users: JSON.parse(res).response.map((user: UserInfo) => user.id)
                                }).then((res: any) => {
                                    state.statusText = "User successfully added"
                                    const timeout = setTimeout(() => {
                                        state.statusText = ""
                                    }, 2000)
                                    clearTimeout(timeout)
                                })
                                    .catch(error => console.log(error))
                            } else {
                                state.statusText = "No users with this Login"
                            }
                        } catch {

                        }
                    } else {
                        try {
                            state.statusText = JSON.parse(res.response).reason

                        } catch {

                        }
                    }
                })
                    .catch(error => console.log(error))
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
                            .catch(error => console.log(error))
                    } else {
                        state.statusText = "No users with this Login"
                    }

                } else {
                    state.statusText = JSON.parse(res.response).reason
                }
            })
                .catch(error => console.log(error))
        },
        setUserWantDeleteUsers: (state, data: boolean) => {
            state.userWantDeleteUsers = data
        },
        setUserWantAddUsers: (state, data: boolean) => {
            state.userWantAddUsers = data
        },
        deleteChat: () => {
            chatsApi.deleteChatById(stateManager.getState().currentChatId).then((res: any) => {
                if (res.status === 200) {

                }
            })
        }
    }
})
