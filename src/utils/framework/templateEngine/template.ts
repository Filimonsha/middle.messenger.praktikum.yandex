import { TEMPLATE_DYNAMIC_REGEXP, TEMPLATE_IF_THEN_REGEXP, TEMPLATE_VARIABLES_REGEXP } from '../const/regExp';

export class Template {
  private readonly initialTemplate: string;

  private context: object;

  private modifyTemplate: string;

  constructor(template: string) {
    this.initialTemplate = template;
    this.modifyTemplate = this.initialTemplate;
  }

  compile(context?: object) {
    const result = this.foundDynamicRegexp(context);
    this.modifyTemplate = this.initialTemplate;
    return result;
  }

  private getProperty(object, propertyName: string) {
    const keys = propertyName.split('.');

    let propertyOfObject;
    let currentObject = object;
    for (const key of keys) {
      propertyOfObject = currentObject[key];
      if (!propertyOfObject) return undefined;
      currentObject = propertyOfObject;
    }

    return propertyOfObject;
  }

  private foundDynamicRegexp(context: object) {
    let nextFoundMatchArray: RegExpExecArray = null;
    this.renderSimpleVariables(context);
    while (nextFoundMatchArray = TEMPLATE_DYNAMIC_REGEXP.exec(this.modifyTemplate)) {
      const foundedDynamicReg = nextFoundMatchArray[1].split(' ').join('');
      const foundedMatch = nextFoundMatchArray[0];
      if (foundedDynamicReg.match(TEMPLATE_IF_THEN_REGEXP)) {
        this.renderCondition(foundedDynamicReg, foundedMatch);
      }
    }

    this.replaceAllDynamicRegExp();
    return this.modifyTemplate;
  }

  private replaceAllDynamicRegExp() {
    let nextFoundMatchArray: RegExpExecArray = null;
    while (nextFoundMatchArray = TEMPLATE_DYNAMIC_REGEXP.exec(this.modifyTemplate)) {
      // const foundedDynamicReg = nextFoundMatchArray[1].split(" ").join("")
      const foundedDynamicReg = nextFoundMatchArray[1];
      const foundedMatch = nextFoundMatchArray[0];
      this.modifyTemplate = this.modifyTemplate.replace(
        // new RegExp(foundedMatch, "gi"),
        foundedMatch,
        foundedDynamicReg,
      );
    }
  }

  private renderSimpleVariables(context: object) {
    let nextFoundMatchArray: RegExpExecArray = null;
    while (nextFoundMatchArray = TEMPLATE_VARIABLES_REGEXP.exec(this.initialTemplate)) {
      const foundedNameOfProperty = nextFoundMatchArray[1].trim();
      const foundedMatch = nextFoundMatchArray[0];
      const property = this.getProperty(context, foundedNameOfProperty);
      if (foundedNameOfProperty) {
        this.modifyTemplate = this.modifyTemplate.replace(
          new RegExp(foundedMatch, 'gi'),
          property,
        );
      }
    }
  }

  static insertTemplateInDom(template: string, parent: HTMLElement) {
    parent.innerHTML = template;
  }

  private renderCondition(foundedDynamicReg: string, foundedMatch: string) {
    const foundedConditionArgs = TEMPLATE_IF_THEN_REGEXP.exec(foundedDynamicReg);
    const condition = eval(foundedConditionArgs[1]);
    const ifSuccessThen = foundedConditionArgs[2];

    if (condition) {
      this.modifyTemplate = this.modifyTemplate.replace(
        foundedMatch,
        ifSuccessThen,
      );
    } else {
      this.modifyTemplate = this.modifyTemplate.replace(
        foundedMatch,
        '',
      );
    }
  }
}
