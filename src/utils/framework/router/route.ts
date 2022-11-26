import {Block} from "../block";
type CreateOptionsType = {
    mountingPlace: string
}


export default class Route {
    private readonly pathName: string;
    private readonly createOptions: CreateOptionsType;
    private component: Block<any>;

    constructor(pathName: string, component: Block<any>, createOptions: CreateOptionsType) {
        this.pathName = pathName;
        this.createOptions = createOptions;
        this.component = component;
    }

    public renderRoute() {
        this.component.renderDom(this.createOptions.mountingPlace)
    }

    public matchRoute(routePathName: string) {
        return this.pathName === routePathName
    }

    public getRoutePathName() {
        return this.pathName
    }

    public disableRouteDisplay() {
        this.component?.getCompiledElement().remove()
    }
}
