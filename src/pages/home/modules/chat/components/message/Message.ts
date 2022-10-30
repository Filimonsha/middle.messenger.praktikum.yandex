import { Block } from "../../../../../../utils/framework/block";
import { messageTemplate } from "./message.tmpl";

export class Message extends Block {
  constructor(props) {
    super(messageTemplate, props);
  }
}
