interface IEventBus {
    subscribeCallbackOnEvent: (eventName:string, callback:Function) => void,
    unSubscribeCallbackFromEvent: (eventName:string, callback:Function) => void,
    notify: (eventName:string) => void
}

export class EventBus implements IEventBus {
  private listeners:object = {};

  constructor() {
  }

  subscribeCallbackOnEvent(eventName: string, callback: Function): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
  }

  unSubscribeCallbackFromEvent(eventName: string, callback: Function): void {
    if (!this.listeners[eventName]) {
      throw new Error('This event does not exist');
    }

    this.listeners[eventName] = this.listeners[eventName].filter(
      (listener) => listener !== callback,
    );
  }

  notify(event, ...args) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
