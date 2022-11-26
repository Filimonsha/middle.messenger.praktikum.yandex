import {HTTPTransport} from "./http";
import {ChangeUserInfo, ChangeUserPassword} from "./types/user";

const authApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2", "/user")

class UserApi {
    changeUserInfo(data: ChangeUserInfo) {
        return authApiInstance.put("/profile", data)
    }

    changeUserAvatar(data: FormData) {
        return authApiInstance.put("/profile/avatar", data)
    }

    changeUserPassword(data: ChangeUserPassword) {
        return authApiInstance.put("/password", data)
    }

    getUserById(userId: number) {
        return authApiInstance.get(`${userId}`)
    }

    searchUserByLogin(login: string) {
        return authApiInstance.post("/search",{login})
    }
}

export default new UserApi()
