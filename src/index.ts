import "./index.scss";
import {ChatLayoutComponent} from "./layout/chat/ChatLayout";
import {Router} from "./utils/framework/router/router";
import {LoginLayoutComponent} from "./layout/login";
import {RegistrationLayoutComponent} from "./layout/registration";
import {UserProfileLayout} from "./layout/userProfile/UserProfile";

const router = new Router()
console.log()
router.use("/messenger",ChatLayoutComponent)
    .use("/",LoginLayoutComponent)
    .use("/sign-up",RegistrationLayoutComponent)
    .use("/settings",UserProfileLayout)

router.start()
// router.go("/main")
export default router
