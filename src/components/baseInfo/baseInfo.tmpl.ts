import './baseInfo.scss';
import { Template } from '../../utils/framework/templateEngine/template';

export const baseInfoTemplate = new Template(
  `
    <div class="base-info">
        <div class="base-info_key">
                <span>
                    {{ !key!}}
                </span>
        </div>
        <div class="base-info_value">
                <span>
                    {{!value!}}
                </span>
        </div>
    </div>
    `,
);
