import {Block, Props} from "../../../../../../utils/framework/block";
import {headerTemplate} from "./header.tmpl";
import {connect} from "../../../../../../utils/framework/applicationStateManager/utils/connect";
import {MainBtn} from "../../../../../../components/btns/mainBtn";
import chatsApi from "../../../../../../utils/api/chatsApi";
import {chatStore} from "../../../../../../store/chatStore";
import doc = Mocha.reporters.doc;
import stateManager from "../../../../../../utils/framework/applicationStateManager";

type HeaderComponentState = {
    closeModalHandler: Function,
    AddUserBtn: MainBtn,
    DeleteUserBtn: MainBtn,
    ActionBtn: MainBtn
}

class Header extends Block<HeaderComponentState> {
    constructor(props: Props<HeaderComponentState>) {
        super(headerTemplate, props);
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
const headerComponentProps: Props<HeaderComponentState> = {
    state: {
        AddUserBtn,
        ActionBtn,
        DeleteUserBtn,
        closeModalHandler: () => {
            chatStore.reducers.setUserWantAddUsers(false)
            chatStore.reducers.userWantDeleteUsers(false)
        }
    },
}
const mapStateToProps = (state) => {
    return {
        userWantConfigureChat: state.userWantAddUsers || state.userWantDeleteUsers,
        statusText: state.statusText
    }
}
export const HeaderComponent = connect(new Header(headerComponentProps), mapStateToProps)
