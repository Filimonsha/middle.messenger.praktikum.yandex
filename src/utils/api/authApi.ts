import {HTTPTransport} from "./http";
import {LoginData, RegistrationData} from "./types/auth";
import {BASE_URL} from "./const/routes";

const authApiInstance = new HTTPTransport(BASE_URL, "/auth")

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
