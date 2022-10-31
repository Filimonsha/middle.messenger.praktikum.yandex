import {Block, Props} from "../../../../../../utils/framework/block";
import {messageTemplate} from "./message.tmpl";

type MessageState = {
    user: string,
    messageText: string
}

export class Message extends Block<MessageState> {
    constructor(props: Props<MessageState>) {
        super(messageTemplate, props);
    }
}
