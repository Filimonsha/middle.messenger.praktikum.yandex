import {Block, Props} from "../../../../../../utils/framework/block";
import {messagesTemplate} from "./messages.tmpl";
import {Message} from "../../components/message";

type MessagesProps = {
    messages: Message[]
}
const messagesProps:Props<MessagesProps> = {
    state: {
        messages:[]
    },
};

class Messages extends Block<MessagesProps> {
    constructor(props: Props<MessagesProps>) {
        super(messagesTemplate, props);
    }
}

export const MessagesComponent = new Messages(messagesProps);
