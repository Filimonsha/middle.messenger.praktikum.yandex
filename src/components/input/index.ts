import { Block } from "../../utils/framework/block";
import { inputTemplate } from "./input.tmpl";

export class Input extends Block {
  constructor(props) {
    super(inputTemplate, props);
  }
}
