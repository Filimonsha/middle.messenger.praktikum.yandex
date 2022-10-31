import {Block, Props} from "../../../../../../utils/framework/block";
import {chatItemTemplate} from "./chatItem.tmpl";

export type ChatItemState = {
    imgSrc: string,
    userName: string,
    lastMsg: string,
    lastMsgTime: string,
    countOfNotification: number,
}

export class ChatItem extends Block<ChatItemState> {
    constructor(props: Props<ChatItemState>) {
        super(chatItemTemplate, props);
    }
}
