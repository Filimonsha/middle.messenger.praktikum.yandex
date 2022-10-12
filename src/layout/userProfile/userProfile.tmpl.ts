import "./userProfile.scss"
import {Template} from "../../utils/templateEngine/template";
import {BaseInfo} from "../../components/baseInfo";
import {DefaultBtn} from "../../components/btns/defaultBtn";

const userData = {
    userName: "Alex Golanov",
    userInfo:[
        {
            key:"some 1",
            value:"value 1"
        },{
            key:"some 2",
            value:"value 2"
        },{
            key:"some 3",
            value:"value 4"
        },
    ],
    btns:[{
        text:"Изменить данные",
    },{
        text:"Изменить пароль",
    }]
}
export const userProfileLayoutTemplate = new Template(
    `
            <div class="user-profile">
        <div class="user-profile_logo">
            Logo
        </div>
        <span class="user-profile_name">Oleg</span>
        <div class="user-profile_img">
            Profile image
        </div>
        <div class="user-profile_info">
               ${ userData.userInfo.map(info => BaseInfo.compile(info)).join("")  }
        </div>
        <div class="user-profile_change-info">
            ${userData.btns.map(btn => DefaultBtn.compile(btn)) }
        </div>
    </div>
    `
)
