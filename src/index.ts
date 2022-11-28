import "./index.scss";
import {ChatLayoutComponent} from "./layout/chat/ChatLayout";
import {Router} from "./utils/framework/router/router";
import {LoginLayoutComponent} from "./layout/login";
import {RegistrationLayoutComponent} from "./layout/registration";
import {UserProfileLayout} from "./layout/userProfile/UserProfile";


const ifUserAuthedHandler = () => {
    if (localStorage.getItem("currentUserId")) {
        router.go("/messenger")
        return false
    } else return true
}
const ifUserNotAuthedHandler = () => {
    if (!localStorage.getItem("currentUserId")) {
        router.go("/")
        return false
    } else return true
}
const router = new Router()
console.log()
router.use("/messenger", ChatLayoutComponent, {
    renderCondition: ifUserNotAuthedHandler
})
    .use("/", LoginLayoutComponent, {
        renderCondition: ifUserAuthedHandler
    })
    .use("/sign-up", RegistrationLayoutComponent, {
        renderCondition: ifUserAuthedHandler
    })
    .use("/settings", UserProfileLayout, {
        renderCondition: ifUserNotAuthedHandler
    })

router.start()
// router.go("/main")
export default router
