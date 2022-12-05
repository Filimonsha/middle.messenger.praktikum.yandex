import {Template} from "./template";
import {assert} from "chai";

describe("compile function",()=>{
    it("Compile function should return  string ",()=>{
        const mainBtnTemplate = new Template(`
        <button type="{{!type!}}" class="btn btn__main login_btn__main" >
            <span class="btn_text">
                {{!text!}}
            </span>
        </button>
        `);
        const btnCtx = {
            type:"button",
            text:"some text"
        }
        const expectedString = `
        <button type="button" class="btn btn__main login_btn__main" >
            <span class="btn_text">
                some text
            </span>
        </button>
        `
        assert.equal(mainBtnTemplate.compile(btnCtx),expectedString)
    })
})
