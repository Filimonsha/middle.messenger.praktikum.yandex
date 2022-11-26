import {Block, Props} from "../../../../../../utils/framework/block";
import {chatItemTemplate} from "./chatItem.tmpl";
import {Chat} from "../../../../../../utils/api/types/chat";


export class ChatItem extends Block<Chat> {
    constructor(props: Props<Chat>) {
        super(chatItemTemplate, props);
    }
}
