import {Block} from "../../block";
import stateManager from "../index";
import {StateManagerEvents} from "../const/stateManagerEvents";
import {MapStateToProps} from "../types/mapStateToProps";

export function connect(component: Block<any>, mapStateToProps: MapStateToProps) {
    //TODO
    const updateAllProps = () => {
            Object.entries(mapStateToProps(stateManager.getState())).forEach(([stateName, stateValue]) => {
                component.updateState(stateName, stateValue)
            })
    }
    updateAllProps()
    stateManager.subscribeCallbackOnEvent(StateManagerEvents.UPDATE, updateAllProps)
    return component
}
