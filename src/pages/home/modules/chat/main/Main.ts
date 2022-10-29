import { Block } from "../../../../../utils/framework/block";
import { mainTemplate } from "./main.tmpl";
import { HeaderComponent } from "./header";
import { MessagesComponent } from "./messages";
import { ControlPanelComponent } from "./controlPanel/ControlPanel";

const mainProps = {
  state: {
    Header: HeaderComponent,
    Messages: MessagesComponent,
    ControlPanel: ControlPanelComponent,
  },
};
class Main extends Block {
  constructor(props) {
    super("div", mainTemplate, props);
  }
}
export const MainComponent = new Main(mainProps);
