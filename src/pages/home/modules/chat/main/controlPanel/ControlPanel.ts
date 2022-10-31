import {Block, Props} from "../../../../../../utils/framework/block";
import {controlPanelTemplate} from "./controlPanel.tmpl";

export class ControlPanel extends Block<{}> {
    constructor(props: Props<{}>) {
        super(controlPanelTemplate, props);
    }
}

export const ControlPanelComponent = new ControlPanel({
    state: {},
});
