import {Block, Props} from "../../../../../../utils/framework/block";
import {messageTemplate} from "./message.tmpl";
import {FullMessage} from "../../../../../../utils/api/types/chat";

type WhoseMessage = {
    isHomeMessage: boolean
}
export type MessageProps = FullMessage & WhoseMessage

export class Message extends Block<MessageProps> {
    constructor(props: Props<MessageProps>) {
        super(messageTemplate, props);
    }
}
