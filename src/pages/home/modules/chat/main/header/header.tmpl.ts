import { Template } from "../../../../../../utils/templateEngine/template";
import "./header.scss"
import {OptionIcon} from "../../../../../../components/icons/optionIcon";
export const headerTemplate = new Template(`
        <div class="header">
        <div class="header_user">
            <div class="header_avatar">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftree-silhouette.html&psig=AOvVaw2OeEbJp9ViqVtbd-AV8qa1&ust=1665841497782000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLjEz6ft3_oCFQAAAAAdAAAAABAN" alt="">
            </div>
            <div class="header_name">
                <span>
                    {{ !userName! }}
                </span>
            </div>
        </div>
        <button class="btn header_optionsBtn">
            ${OptionIcon()}
        </button>
    </div>
`)
