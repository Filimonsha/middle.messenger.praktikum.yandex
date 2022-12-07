import {HTTPTransport} from "./http";
import {AddUsersToChat} from "./types/chat";
import {BASE_URL} from "./const/routes";

const chatsApiInstanse = new HTTPTransport(BASE_URL, "/chats")

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
