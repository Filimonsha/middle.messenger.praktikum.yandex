import "./index.scss";
import { LoginLayoutComponent } from "./layout/login";
import { ChatLayoutComponent } from "./layout/chat/ChatLayout";
import { RegistrationLayoutComponent } from "./layout/registration";

// CHAT.innerHTML = ChatLayout.compile()
// LOGIN.innerHTML = LoginLayout.compile()
// REGISTRATION.innerHTML = RegistrationLayout.compile()
// USER_PROFILE.innerHTML = UserProfileLayout.compile()
// ParentComponent.renderDom("#test")
LoginLayoutComponent.renderDom("#LOGIN");
ChatLayoutComponent.renderDom("#CHAT");
RegistrationLayoutComponent.renderDom("#REGISTRATION");
