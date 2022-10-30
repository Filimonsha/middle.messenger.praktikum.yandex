import { Block } from "../../../../../../utils/framework/block";
import { headerTemplate } from "./header.tmpl";

class Header extends Block {
  constructor(props) {
    super(headerTemplate, props);
  }
}
export const HeaderComponent = new Header({
  state: {
    userName: "Oleg",
  },
});
