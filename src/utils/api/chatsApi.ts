import {HTTPTransport} from "./http";
import {AddUsersToChat} from "./types/chat";

const chatsApiInstanse = new HTTPTransport("https://ya-praktikum.tech/api/v2", "/chats")

class ChatsApi {
    getChats() {
        return chatsApiInstanse.get("/")
    }

    createChat(title: string) {
        return chatsApiInstanse.post("/", {title})
    }

    deleteChatById(chatId: number) {
        return chatsApiInstanse.delete("/", {chatId})
    }

    getTokenToConnection(chatId: number) {
        return chatsApiInstanse.post(`/token/${chatId}`)
    }

    addUsers(data: AddUsersToChat) {
        return chatsApiInstanse.put("/users", data)
    }

    deleteUsers(data: AddUsersToChat) {
        return chatsApiInstanse.delete("/users",data)
    }

}

export default new ChatsApi()
