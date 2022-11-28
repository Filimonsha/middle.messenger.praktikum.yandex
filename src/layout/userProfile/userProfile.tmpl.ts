import './userProfile.scss';
import {Template} from '../../utils/framework/templateEngine/template';
import {BaseInfo} from '../../components/baseInfo';
import {DefaultBtn} from '../../components/btns/defaultBtn';

const userData = {
    userName: 'Alex Golanov',
    userInfo: [
        {
            key: 'some 1',
            value: 'value 1',
        }, {
            key: 'some 2',
            value: 'value 2',
        }, {
            key: 'some 3',
            value: 'value 4',
        },
    ],
    btns: [{
        text: 'Изменить данные',
    }, {
        text: 'Изменить пароль',
    }],
};
export const userProfileLayoutTemplate = new Template(`
      <div class="user-profile">
        <div class="user-profile_logo">
           <img src={{!userInfo.avatar!}} alt="user avatar">
        </div>
        <div>
             <span>Обновить изображенеие</span>
            <input type="file" id="AVATAR_FILE">
            <span>{{!avatarStatus!}}</span>
            {{ !ChangeAvatarBtn! }}
        </div>
        <div class="user-profile_description {{ if (!userWantChanges!) then {d-none} }}">
            <div class="user-profile_line">
                     <span>Почта</span>
                     <p>{{!userInfo.email!}}</p>
            </div>
            <div class="user-profile_line">
                     <span>Логин</span>
                     <p>{{!userInfo.login!}}</p>
            </div>
            <div class="user-profile_line">
                     <span>Имя</span>
                     <p>{{!userInfo.first_name!}}</p>
            </div>
            <div class="user-profile_line">
                     <span>Имя в чате</span>
                     <p>{{!userInfo.display_name!}}</p>
            </div>
            <div class="user-profile_line">
                     <span>Телефон</span>
                     <p>{{!userInfo.phone!}}</p>
            </div>
        </div>
        <div class="user-profile_changeInfo {{ if (!userWantChangeInfo!) then {d-flex} }}">
            
            <form class="user-profile_form">
                {{!changeInfoInputs!}}
            <div class="user-profile_btns">
                {{!SaveInfoBtn!}}
                {{!ReturnInfoBtn!}}
            </div>
            </form>
  
        </div>
        <div class="user-profile_changePassword {{ if (!userWantChangePassword!) then {d-flex} }}">
            <form class="user-profile_form">
                {{!changePasswordInputs!}}
             <div class="user-profile_btns">
                {{!SavePasswordBtn!}}
                {{!ReturnPasswordBtn!}}
            </div>
                <span>{{!changePasswordStatus!}}</span>
            </form>

        </div>
        
    <div class="user-profile_btns {{ if (!userWantChanges!) then {d-none} }} ">
    {{!ChangeInfoBtn!}}
    {{!ChangePasswordBtn!}}
    {{!ExitBtn!}}
    </div>
    </div>
 `)
