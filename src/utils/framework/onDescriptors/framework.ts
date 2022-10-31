import {Test} from "../templateEngine/test";

//Это реализация на дескрипторах - нигде не используется, только для
// ознакомления.

export class Component<TState extends object = {}> {
    // Состояние компонента, здесь будем держать дескрипторы
    protected componentState: TState = {};

    private readonly componentName: string;

    private readonly targetElement: HTMLElement;

    private elementNode: HTMLElement;

    private models: Array<string>;

    constructor(componentName: string, targetElement: HTMLElement) {
        this.componentName = componentName;
        this.targetElement = targetElement;

        this.prepareTemplate();
        this.prepareVariables();
        this.bindVariables();
        this.bindActions();
        this.render();
    }

    prepareTemplate(): void {
        const foundTemplate = document.getElementById(this.componentName);

        if (!foundTemplate) throw new Error("No such template");

        this.elementNode = foundTemplate.cloneNode(true).content.children[0];
    }

    prepareVariables(): void {
        const rawModels: Array<string> = Array.from(
            this.elementNode.querySelectorAll("[ya-model]")
        ).map((element) => element.getAttribute("ya-model"));
        this.models = [...Array.from(new Set(rawModels))];
    }

    bindVariables(): void {
        this.models.forEach((modelName) => {
            const relatedElements = Array.from(
                this.elementNode.querySelectorAll(`[ya-model="${modelName}"]`)
            );
            let currentModelValue = "";
            Object.defineProperty(this.componentState, modelName, {
                get: () => currentModelValue,
                set(newValue: string) {
                    currentModelValue = newValue;

                    relatedElements.forEach((element) => {
                        if (element.tagName === "INPUT") {
                            const inputElement = element as HTMLInputElement;
                            inputElement.value = currentModelValue;
                        } else {
                            element.textContent = currentModelValue;
                        }
                    });
                },
            });
            this.elementNode
                .querySelector(`input[ya-model="${modelName}"]`)
                .addEventListener("keyup", (e) => {
                    this.componentState[modelName] = e.target.value;
                });
        });
    }

    bindActions(): void {
        // нашли все элемента
        this.elementNode.querySelectorAll("[ya-click]").forEach((element) => {
            // взяли значение атрибута
            const fnName = element.getAttribute("ya-click");
            element.addEventListener("click", () => {
                // вызвали и не забыли сохранить контекст
                this[fnName].call(this);
            });
        });
    }

    render(): void {
        this.targetElement.parentNode.replaceChild(
            this.elementNode,
            this.targetElement
        );
    }
}

// реестр компонентов, их может быть много, но у нас сейчас один
const componentsRegistry: Array<new (...args) => Component> = [Test];

componentsRegistry.forEach(
    (componentConstructor: new (...args) => Component) => {
        // конструктор - это функция, у неё есть name, используем его для сопоставления с тегами, которые найдём в DOM
        [
            ...Array.from(document.getElementsByTagName(componentConstructor.name)),
        ].forEach((tagElement) => {
            new componentConstructor(tagElement);
        });
    }
);
