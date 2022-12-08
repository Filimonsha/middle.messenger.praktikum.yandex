import {expect} from "chai";
import authApi from "../authApi";

describe('Проверяем корректность аунтификации', () => {
    it('Поверяем,что логин это функция', () => {
      expect(typeof authApi.signin).to.eq("function")
    });

});
