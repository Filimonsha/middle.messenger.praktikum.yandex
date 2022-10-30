import { ATTRIBUTE_FOR_RENDER_LIST } from './const/customAttributes';
import { Block } from './block';

export class AttributeHandler {
  constructor() {
  }

  static handEventsAttributes(handlingElement:HTMLElement) {
    const foundElements = handlingElement.querySelectorAll(`[${ATTRIBUTE_FOR_RENDER_LIST}]`);
    foundElements.forEach(this.handleAddListFromAttribute);
    console.log(foundElements);
  }

  private static handleAddListFromAttribute(elementWithListAttribute:HTMLElement) {
    const attributeData = elementWithListAttribute.getAttribute(ATTRIBUTE_FOR_RENDER_LIST);
    const classOfListElement = attributeData.split(',')[0].trim();
    const listOfElements = attributeData.split(',')[1].trim();

    const clasS = eval(`new ${classOfListElement}`);
    console.log(clasS);
  }
}
