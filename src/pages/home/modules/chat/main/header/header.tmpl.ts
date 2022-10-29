import { Template } from '../../../../../../utils/framework/templateEngine/template';
import './header.scss';
import { OptionIcon } from '../../../../../../components/icons/optionIcon';

export const headerTemplate = new Template(`
        <div class="header">
        <div class="header_user">
            <div class="header_avatar">
                <img src="" alt="">
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
`);
