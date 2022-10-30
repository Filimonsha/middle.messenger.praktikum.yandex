import { Component } from "../onDescriptors/framework";

type TestProps = {
  title: string;
};

export class Test extends Component<TestProps> {
  constructor(componentElement: HTMLElement) {
    super("Test", componentElement);
  }

  handleClick(): void {
    this.componentState.title = "change from js!";
  }
}
