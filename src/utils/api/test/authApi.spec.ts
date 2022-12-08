import {expect} from "chai";
import authApi from "../authApi";

describe('Проверяем корректность аунтификации', () => {
    it('Поверяем возможность войти по корректным данным', () => {
      expect(authApi.signin({login:"LolyLoly",password:"Password123"}).then((res:any) => res.status)).to("200")
    });

});
