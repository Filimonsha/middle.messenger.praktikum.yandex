import { v4 as makeUUID } from "uuid";
import { EventBus } from "../eventBus";
import { Events } from "./const/events";
import { Template } from "../templateEngine/template";
import { CHAT } from "../../../const/DOMElements";
import { AttributeHandler } from "../attributeHandler";
import { isEmpty } from "../../myDash/isEmpty";

type Props = {
  state: object;
  events?: object;
};

export abstract class Block {
  private eventBus = new EventBus();

  private readonly metaDate;

  private element: HTMLElement;

  private readonly template: Template;

  private componentState;

  private readonly componentEvents: object | null;

  private readonly componentChildren: object | null;

  private readonly componentSimpleState: object;

  private readonly componentId = `component-${makeUUID()}`;

  // private
  protected constructor(tagName = "div", template: Template, props: Props) {
    this.template = template;
    this.componentEvents = props.events;
    const { children, simpleState } = this.findChildrenAndState(props.state);
    this.componentChildren = children;
    this.componentSimpleState = simpleState;
    this.metaDate = { tagName, props };
    if (children) {
      this.createDummyChildren();
    }
    this.makeStateProxy();
    this.registerEvents();
    this.eventBus.notify(Events.INIT);
  }

  private registerEvents = () => {
    this.eventBus.subscribeCallbackOnEvent(Events.INIT, this.init.bind(this));
    this.eventBus.subscribeCallbackOnEvent(
      Events.COMPONENT_DID_MOUNT,
      this.componentDidMount.bind(this)
    );
    this.eventBus.subscribeCallbackOnEvent(
      Events.COMPONENT_RENDER,
      this.render.bind(this)
    );
    this.eventBus.subscribeCallbackOnEvent(
      Events.COMPONENT_DID_UPDATE,
      this.componentDidUpdate.bind(this)
    );
  };

  // State Proxy
  private makeStateProxy = () => {
    console.log("VA", this.metaDate.props);
    const handlers: ProxyHandler<any> = {
      set: (target, p, value) => {
        target[p] = value;
        this.eventBus.notify(Events.COMPONENT_DID_UPDATE);
        return true;
      },
    };
    this.componentState = new Proxy(this.metaDate.props.state, handlers);
  };

  // Events
  private init = () => {
    const createElement = () => {
      const { tagName } = this.metaDate;
      this.element = document.createElement(tagName);
    };

    createElement();
    this.eventBus.notify(Events.COMPONENT_RENDER);
  };

  private componentDidMount(oldProps) {
    console.log("component did mount");
  }

  private componentDidUpdate() {
    console.log(" Component Did update!");
    this.eventBus.notify(Events.COMPONENT_RENDER);
  }

  private render = () => {
    if (this.element && this.componentEvents) {
      Object.keys(this.componentEvents).forEach((eventName) => {
        this.element.removeEventListener(
          eventName,
          this.componentEvents[eventName]
        );
      });
    }
    // console.log("state in render phase",this.template)
    this.element.innerHTML = this.template.compile(this.componentState);
    // AttributeHandler.handEventsAttributes(this.element)
    if (this.componentChildren) {
      this.renderChildren();
    }

    if (this.componentEvents) {
      Object.keys(this.componentEvents).forEach((eventName) => {
        this.element.addEventListener(
          eventName,
          this.componentEvents[eventName].bind(this)
        );
      });
    }
  };

  // find children
  private findChildrenAndState = (state) => {
    const children = {};
    const simpleState = {};

    Object.entries(state).forEach(([key, value]) => {
      const stateValueIsArray = Array.isArray(value);
      if (stateValueIsArray) {
        if (value.every((element) => element instanceof Block)) {
          children[key] = [];
          value.forEach((childElement: Block, index) => {
            children[key].push(childElement);
          });
        }
      } else if (value instanceof Block) {
        console.log(value);
        children[key] = value;
      } else {
        simpleState[key] = value;
      }
    });
    return { children, simpleState };
  };

  private createDummyChildren() {
    const createDummyChild = (childrenValue: Block, childrenName: string) => {};
    console.log(this.componentChildren, "Ehf");
    Object.entries(this.componentChildren).forEach((children) => {
      const childrenName = children[0];
      const childrenValue: Block | Array<Block> = children[1];
      if (Array.isArray(childrenValue)) {
        childrenValue.forEach((child, index) => {
          console.log(index, "JJJJJJ");
          const childrenDummy = `
                <div id=${child.componentId}></div>
            `;
          this.metaDate.props.state[childrenName][index] = childrenDummy;
          console.log(
            "Hui",
            child,
            this.metaDate.props.state[childrenName][index]
          );
        });
      } else {
        const childrenDummy = `
                <div id=${childrenValue.componentId}></div>
            `;
        this.metaDate.props.state[childrenName] = childrenDummy;
      }
    });
    console.log(this.metaDate.props.state);
  }

  private renderChildren() {
    const renderOneChild = (child: Block) => {
      console.log(child, "hah");
      const childrenId = `#${child.componentId.toString()}`;
      const foundChildrenDummy = this.element.querySelector(childrenId);
      if (foundChildrenDummy) {
        foundChildrenDummy.replaceChildren(child.getCompiledElement());
      } else {
        console.log("In template didnt find children layout!");
      }
    };
    Object.values(this.componentChildren).forEach((children) => {
      if (Array.isArray(children)) children.forEach(renderOneChild);
      else renderOneChild(children);
    });
  }

  // User interaction
  public updateState = (stateName, newValue) => {
    this.componentState[stateName] = newValue;
  };

  public getState = () => ({ ...this.componentState });

  public getComponentChildren = () => ({ ...this.componentChildren });

  public getCompiledElement = () => this.element;

  public renderDom = (rootSelector: string) => {
    const root = document.querySelector(rootSelector);
    root.appendChild(this.element);
    this.eventBus.notify(Events.COMPONENT_DID_MOUNT);
  };
}
