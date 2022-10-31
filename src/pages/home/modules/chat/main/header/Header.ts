import {Block, Props} from "../../../../../../utils/framework/block";
import {headerTemplate} from "./header.tmpl";

class Header extends Block<{ userName: string }> {
    constructor(props: Props<{ userName: string }>) {
        super(headerTemplate, props);
    }
}

export const HeaderComponent = new Header({
    state: {
        userName: "Oleg",
    },
});
