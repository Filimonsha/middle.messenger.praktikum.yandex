import { Block } from '../../../utils/framework/block';
import { mainBtnTemplate } from './mainBtn.tmpl';

export class MainBtn extends Block {
  constructor(props) {
    super('div', mainBtnTemplate, props);
  }
}
