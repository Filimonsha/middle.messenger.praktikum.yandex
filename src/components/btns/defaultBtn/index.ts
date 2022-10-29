import { Block } from '../../../utils/framework/block';
import { defaultBtnTemplate } from './defaultBtn.tmpl';

export class DefaultBtn extends Block {
  constructor(props) {
    super('div', defaultBtnTemplate, props);
  }
}
