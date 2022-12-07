import {expect} from "chai";
import {HTTPTransport} from "../http";
import {BASE_URL} from "../const/routes";

describe('Проверяем корректность модуля отпраки запросов', () => {
    it('Проверяем,что все крудовские операции в класс возвращают промис', () => {
        const authApiInstance = new HTTPTransport(BASE_URL, "/auth")
        expect(typeof authApiInstance.post("")).to("Promise")
        expect(typeof authApiInstance.get("")).to("Promise")
        expect(typeof authApiInstance.put("")).to("Promise")
        expect(typeof authApiInstance.delete("")).to("Promise")
    });

});
