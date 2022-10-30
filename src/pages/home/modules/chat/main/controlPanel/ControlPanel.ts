import { Block } from "../../../../../../utils/framework/block";
import { controlPanelTemplate } from "./controlPanel.tmpl";

export class ControlPanel extends Block {
  constructor(props) {
    super(controlPanelTemplate, props);
  }
}
export const ControlPanelComponent = new ControlPanel({
  state: {},
});
