import {expect} from "chai";
import {HTTPTransport} from "../http";
import {BASE_URL} from "../const/routes";

describe('Проверяем корректность модуля отпраки запросов', () => {
    it('Проверяем,что все крудовские операции в класс возвращают промис', () => {
        const authApiInstance = new HTTPTransport(BASE_URL, "/auth")
        expect(authApiInstance.post("") instanceof Promise<unknown>).to.eq(true)
        expect(authApiInstance.get("") instanceof Promise<unknown>).to.eq(true)
        expect(authApiInstance.put("") instanceof Promise<unknown>).to.eq(true)
        expect(authApiInstance.delete("") instanceof Promise<unknown>).to.eq(true)
    });

});
