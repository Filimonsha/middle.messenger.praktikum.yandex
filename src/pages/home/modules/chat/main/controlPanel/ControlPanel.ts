import {Block, Props} from "../../../../../../utils/framework/block";
import {controlPanelTemplate} from "./controlPanel.tmpl";
import {messengerStore} from "../../../../../../store/messengerStore";

export class ControlPanel extends Block<{}> {
    constructor(props: Props<{}>) {
        super(controlPanelTemplate, props);
    }
}

export const ControlPanelComponent = new ControlPanel({
    state: {
        sendHandler: () => {
            messengerStore.reducers.sendNewMessage((document.getElementById("MESSAGE_VALUE_INPUT") as HTMLInputElement)?.value)
        },
        mem:""
    },
});
