import {Block, Props} from "../../../utils/framework/block";
import { defaultBtnTemplate } from "./defaultBtn.tmpl";

export type DefaultBtnState = {
  type:string,
  text:string,
  handleClick?:EventListener
}

export class DefaultBtn extends Block<DefaultBtnState> {
  constructor(props:Props<DefaultBtnState>) {
    super(defaultBtnTemplate, props);
  }
}
