import {Block, Props} from "../../../../../utils/framework/block";
import {mainTemplate} from "./main.tmpl";
import {MessagesComponent} from "./messages";
import {ControlPanelComponent} from "./controlPanel/ControlPanel";
import {HeaderComponent} from "./header/Header";
import {connect} from "../../../../../utils/framework/applicationStateManager/utils/connect";

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

const mapStateToProps = (state:any) => {
    return {
        currentChatId: state.currentChatId,
        showChat: state.currentChatId
    }
}
export const MainComponent = connect(new Main(mainProps), mapStateToProps);
