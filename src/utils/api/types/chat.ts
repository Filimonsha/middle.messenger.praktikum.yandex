import {UserInfo} from "./auth";

export type Chats = Array<Chat>

export type Chat = {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: LastMessage
}

export type LastMessage = {
    user: UserInfo,
    time: number,
    content: string
}

export type AddUsersToChat = {
    users: Array<number>,
    chatId: number,
}

export type FullMessage = {
    "id": number,
    "user_id": number,
    "chat_id": number,
    "type": string,
    "time": string,
    "content": string,
    "is_read": boolean,
    "file": null | FormData
}
