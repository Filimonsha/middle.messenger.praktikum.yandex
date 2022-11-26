import Route from "./route";
import {Block} from "../block";

export class Router {
    private static instance: Router;
    private routes: Array<Route> = [];
    private readonly history: History = window.history;
    private currentRoute: Route;

    public constructor() {
        if (!Router.instance) {
            Router.instance = this
        }
    }

    private handleRouteStatement(pathName: string) {
        const foundRoute = this.routes.find(route => route.matchRoute(pathName))

        if (!foundRoute) {
            throw new Error("Router does not have this route !")
        }

        if (this.currentRoute){
            this.currentRoute.disableRouteDisplay()
        }

        this.currentRoute = foundRoute

        foundRoute.renderRoute()

    }

        public use(pathName: string, component: Block<any>) {
        const newRoute = new Route(pathName, component, {
            mountingPlace: ".root"
        })
        this.routes.push(newRoute)
        return this
    }

    public go(pathName: string) {
        this.history.pushState({}, "", pathName)
        this.handleRouteStatement(pathName)

    }

    public start() {
        window.addEventListener("popstate", (event) => {
            const eventTarget = event.target as Window
            if (event.currentTarget) {
                this.handleRouteStatement(eventTarget.location.pathname)
            }
        })

        //    if we already be on route page
        this.handleRouteStatement(window.location.pathname)
    }
}
