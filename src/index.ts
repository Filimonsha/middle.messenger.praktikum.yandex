import { ChatLayout } from "./layout/chat/index";
import "./index.scss"
import {CHAT, LOGIN, REGISTRATION, USER_PROFILE} from "./const/DOMElements";
import {LoginLayout} from "./layout/login";
import {RegistrationLayout} from "./layout/registration";
import {UserProfileLayout} from "./layout/userProfile";
CHAT.innerHTML = ChatLayout.compile()
LOGIN.innerHTML = LoginLayout.compile()
REGISTRATION.innerHTML = RegistrationLayout.compile()
USER_PROFILE.innerHTML = UserProfileLayout.compile()