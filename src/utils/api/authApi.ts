import {HTTPTransport} from "./http";
import {LoginData, RegistrationData, UserInfo} from "./types/auth";

const authApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2", "/auth")

class AuthApi {
    signup(data: RegistrationData) {
        return authApiInstance.post("/signup", data)
    }

    signin(data: LoginData) {
        return authApiInstance.post("/signin", data)
    }

    getUserInfo() {
        return authApiInstance.get("/user")
    }

    logout(){
        return authApiInstance.post("/logout")
    }
}

export default new AuthApi()
