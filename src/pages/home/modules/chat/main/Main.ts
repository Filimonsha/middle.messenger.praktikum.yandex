import {Block, Props} from "../../../../../utils/framework/block";
import {mainTemplate} from "./main.tmpl";
import {HeaderComponent} from "./header";
import {MessagesComponent} from "./messages";
import {ControlPanelComponent} from "./controlPanel/ControlPanel";

type MainState = {
    Header: typeof HeaderComponent,
    Messages: typeof MessagesComponent,
    ControlPanel: typeof ControlPanelComponent
}

const mainProps = {
    state: {
        Header: HeaderComponent,
        Messages: MessagesComponent,
        ControlPanel: ControlPanelComponent,
    },
};

class Main extends Block<MainState> {
    constructor(props: Props<MainState>) {
        super(mainTemplate, props);
    }
}

export const MainComponent = new Main(mainProps);
