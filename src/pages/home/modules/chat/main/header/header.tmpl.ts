import {Template} from '../../../../../../utils/framework/templateEngine/template';
import './header.scss';
import {OptionIcon} from '../../../../../../components/icons/optionIcon';

export const headerTemplate = new Template(`
        <div class="header">
        <div class="header_user">
            <div class="header_avatar">
                <img src={{!userInfo.avatar!}} alt="user avatar">
            </div>
            <div class="header_name" on-click={{moveToProfileHandler}}>
                <span>
                    {{ !userInfo.first_name! }} - go to profile
                </span>
            </div>
        </div>
        <button class="btn header_optionsBtn">
            {{!AddUserBtn!}}
            {{!DeleteUserBtn!}}
            {{!DeleteChatBtn!}}
            ${OptionIcon()}
        </button>
        <div class="header_control-chat-users modal {{ if (!userWantConfigureChat!) then {d-block}  }} ">
          <div class="modal-content ">
            <span class="close" on-click={{closeModalHandler}}>&times;</span>
            <input id="USER_LOGIN_INPUT" type="text">
            <span>{{!statusText!}}</span>
            {{!ActionBtn!}}
          </div>
        </div>
    </div>
`);
