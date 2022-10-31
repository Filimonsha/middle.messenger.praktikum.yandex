import {Block, Props} from "../../utils/framework/block";
import { inputTemplate } from "./input.tmpl";

export type InputState = {
  labelName: string,
  validatorName: string,
  placeholder: string,
  value:string,
  type:string,
  handleBlur:EventListener,
  handleFocus:EventListener,
  errors:string,
  name:string
}

export class Input extends Block<InputState> {
  constructor(props:Props<InputState>) {
    super(inputTemplate, props);
  }
}
