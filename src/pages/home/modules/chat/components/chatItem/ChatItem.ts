import { Block } from '../../../../../../utils/framework/block';
import { chatItemTemplate } from './chatItem.tmpl';

export class ChatItem extends Block {
  constructor(props) {
    super('div', chatItemTemplate, props);
  }
}
