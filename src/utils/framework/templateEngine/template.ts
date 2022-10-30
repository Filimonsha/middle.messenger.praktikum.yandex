import {
  TEMPLATE_DYNAMIC_REGEXP,
  TEMPLATE_IF_THEN_REGEXP,
  TEMPLATE_VARIABLES_REGEXP,
} from "../const/regExp";
import { FoundRegexpHandler, RegexpHandler } from "../regexpHandler";

export class Template {
  private readonly initialTemplate: string;

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
    const keys = propertyName.split(".");

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
    this.renderSimpleVariables(context);
    const conditionRegexpHandler: FoundRegexpHandler = (
      foundedDynamicReg,
      foundedMatch
    ) => {
      if (foundedDynamicReg.match(TEMPLATE_IF_THEN_REGEXP)) {
        this.renderCondition(foundedDynamicReg, foundedMatch);
      }
    };
    RegexpHandler.handAllFoundRegexp(
      TEMPLATE_DYNAMIC_REGEXP,
      this.modifyTemplate,
      conditionRegexpHandler
    );
    this.replaceAllDynamicRegExp();
    return this.modifyTemplate;
  }

  private replaceAllDynamicRegExp() {
    const dynamicRegexpHandler: FoundRegexpHandler = (
      foundedDynamicReg,
      foundedMatch
    ) =>
      (this.modifyTemplate = this.modifyTemplate.replace(
        foundedMatch,
        foundedDynamicReg
      ));

    RegexpHandler.handAllFoundRegexp(
      TEMPLATE_DYNAMIC_REGEXP,
      this.modifyTemplate,
      dynamicRegexpHandler,
      false
    );
  }

  private renderSimpleVariables(context: object) {
    const simpleVariablesRegexpHandler: FoundRegexpHandler = (
      foundedDynamicReg,
      foundedMatch
    ) => {
      const property = this.getProperty(context, foundedDynamicReg);
      if (foundedDynamicReg) {
        const propertyElementIsComponent =
          Array.isArray(property) &&
          property.every((propertyElement) => {
            const elementIsString = typeof propertyElement === "string";
            return (
              elementIsString &&
              propertyElement.trim().startsWith("<div id=component-")
            );
          });

        this.modifyTemplate = this.modifyTemplate.replace(
          new RegExp(foundedMatch, "gi"),
          propertyElementIsComponent ? property.join("") : property
        );
      }
    };

    RegexpHandler.handAllFoundRegexp(
      TEMPLATE_VARIABLES_REGEXP,
      this.modifyTemplate,
      simpleVariablesRegexpHandler
    );
  }
  private renderCondition(foundedDynamicReg: string, foundedMatch: string) {
    const foundedConditionArgs =
      TEMPLATE_IF_THEN_REGEXP.exec(foundedDynamicReg);
    const condition = eval(foundedConditionArgs[1]);
    const ifSuccessThen = foundedConditionArgs[2];
    const ifFalseThen = foundedConditionArgs[3];
    if (condition) {
      this.modifyTemplate = this.modifyTemplate.replace(
        foundedMatch,
        ifSuccessThen
      );
    } else if (ifFalseThen) {
      this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, "");
    }
  }
}
