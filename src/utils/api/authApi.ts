import {HTTPTransport} from "./http";
import {LoginData, RegistrationData} from "./types/auth";
import {baseUrl} from "./const/routes";

const authApiInstance = new HTTPTransport(baseUrl, "/auth")

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
