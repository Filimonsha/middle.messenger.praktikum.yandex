import {Block, Props} from "../../../../../../utils/framework/block";
import {headerTemplate} from "./header.tmpl";
import {connect} from "../../../../../../utils/framework/applicationStateManager/utils/connect";
import {MainBtn} from "../../../../../../components/btns/mainBtn";
import {chatStore} from "../../../../../../store/chatStore";
import stateManager from "../../../../../../utils/framework/applicationStateManager";
import {userProfileStore} from "../../../../../../store/userProfileStore";
import router from "../../../../../../index";

type HeaderComponentState = {
    closeModalHandler: Function,
    AddUserBtn: MainBtn,
    DeleteUserBtn: MainBtn,
    ActionBtn: MainBtn,
    DeleteChatBtn:MainBtn,
    moveToProfileHandler: Function
}

class Header extends Block<HeaderComponentState> {
    constructor(props: Props<HeaderComponentState>) {
        super(headerTemplate, props);
        userProfileStore.reducers.getUserInfo()
    }
}

const AddUserBtn = new MainBtn({
    state: {
        text: "Add new user",
        type: "button"
    },
    events: {
        click() {
            chatStore.reducers.setUserWantAddUsers(true)
        }
    }
})

const ActionBtn = new MainBtn({
    state: {
        text: "configure",
        type: "button"
    },
    events: {
        click() {
            const searchValue = (document.getElementById("USER_LOGIN_INPUT") as HTMLInputElement)?.value
            if (stateManager.getState()?.userWantAddUsers) {
                chatStore.reducers.addUsersToChat(searchValue)
            } else if (stateManager.getState()?.userWantDeleteUsers) {
                chatStore.reducers.deleteUsersFromChat(searchValue)
            }
        }
    }
})

const DeleteUserBtn = new MainBtn({
    state: {
        text: "Delete user",
        type: "button"
    },
    events: {
        click() {
            console.log("click")
            chatStore.reducers.setUserWantDeleteUsers(true)
        }
    }
})

const DeleteChatBtn = new MainBtn({
    state:{
        text: "Delete chat",
        type: "button"
    },
    events: {
        click() {
            chatStore.reducers.deleteChat()
        }
    }
})
const headerComponentProps: Props<HeaderComponentState> = {
    state: {
        AddUserBtn,
        ActionBtn,
        DeleteUserBtn,
        DeleteChatBtn,
        moveToProfileHandler: () =>{
            router.go("/settings")
        },
        closeModalHandler: () => {
            chatStore.reducers.setUserWantAddUsers(false)
            chatStore.reducers.setUserWantDeleteUsers(false)
        }
    },
}
const mapStateToProps = (state:any) => {
    return {
        userWantConfigureChat: state.userWantAddUsers || state.userWantDeleteUsers,
        statusText: state.statusText,
        userInfo: {
            ...state.userInfo,
            avatar: state.userInfo?.avatar
        }
    }
}
export const HeaderComponent = connect(new Header(headerComponentProps), mapStateToProps)
