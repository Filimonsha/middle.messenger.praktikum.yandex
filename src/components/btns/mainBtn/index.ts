import {Block, Props} from "../../../utils/framework/block";
import { mainBtnTemplate } from "./mainBtn.tmpl";
export type MainBtnState = {
  type:string,
  text:string,
  handleClick?:EventListener
}
export class MainBtn extends Block<MainBtnState> {
  constructor(props:Props<MainBtnState>) {
    super(mainBtnTemplate, props);
  }
}
