import { v4 as makeUUID } from "uuid";
import { EventBus } from "../eventBus";
import { Events } from "./const/events";
import { Template } from "../templateEngine/template";
type Props = {
  state: object;
  events?: object;
};

export abstract class Block {
  private eventBus = new EventBus();

  private element: HTMLElement;

  private readonly template: Template;

  private readonly componentProps: Props;

  private componentState;

  private readonly componentChildren: object | null;

  private readonly componentSimpleState: object;

  // private readonly componentId = `component-${makeUUID()}`;
  private readonly componentId = `component-${Math.random()*1000}`;

  // private
  protected constructor(template: Template, props: Props) {
    this.template = template;
    this.componentProps = props;
    const { children, simpleState } = this.findChildrenAndState(props.state);
    this.componentChildren = children;
    this.componentSimpleState = simpleState;
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
    const handlers: ProxyHandler<any> = {
      set: (target, p, value) => {
        target[p] = value;
        this.eventBus.notify(Events.COMPONENT_DID_UPDATE);
        return true;
      },
    };
    this.componentState = new Proxy(this.componentProps.state, handlers);
  };

  // Events
  private init = () => {
    const createDummyElement = () => {
      this.element = document.createElement("div");
    };

    createDummyElement();
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
    if (this.element && this.componentProps.events) {
      Object.keys(this.componentProps.events).forEach((eventName) => {
        this.element.removeEventListener(
          eventName,
          this.componentProps.events[eventName]
        );
      });
    }
    this.element.innerHTML = this.template.compile(this.componentState);
    this.element = this.element.children[0];
    console.log(this.element.children);
    // AttributeHandler.handEventsAttributes(this.element)
    if (this.componentChildren) {
      this.renderChildren();
    }

    if (this.componentProps.events) {
      Object.keys(this.componentProps.events).forEach((eventName) => {
        this.element.addEventListener(
          eventName,
          this.componentProps.events[eventName].bind(this)
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
        children[key] = value;
      } else {
        simpleState[key] = value;
      }
    });
    return { children, simpleState };
  };

  private createDummyChildren() {
    const createDummyChild = (childrenValue: Block, childrenName: string) => {};
    Object.entries(this.componentChildren).forEach((children) => {
      const childrenName = children[0];
      const childrenValue: Block | Array<Block> = children[1];
      if (Array.isArray(childrenValue)) {
        childrenValue.forEach((child, index) => {
          const childrenDummy = `
                <div id=${child.componentId}></div>
            `;
          this.componentProps.state[childrenName][index] = childrenDummy;
        });
      } else {
        const childrenDummy = `
                <div id=${childrenValue.componentId}></div>
            `;
        this.componentProps.state[childrenName] = childrenDummy;
      }
    });
  }

  private renderChildren() {
    const renderOneChild = (child: Block) => {
      const childrenId = `#${child.componentId.toString()}`;
      const foundChildrenDummy = this.element.querySelector(childrenId);
      if (foundChildrenDummy) {
        console.error(foundChildrenDummy);
        foundChildrenDummy.replaceWith(child.getCompiledElement());
      } else {
        throw new Error("In template didnt find children layout!");
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
