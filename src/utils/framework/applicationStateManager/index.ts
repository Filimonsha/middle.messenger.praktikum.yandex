import {EventBus} from "../eventBus";
import {StateManagerEvents} from "./const/stateManagerEvents";

export type Indexed = { [key: string]: any }
export type PrepareReducer<T> = (data?: T) => void
export type Reducer<StateType> = (state: StateType, data?: any) => void
export type Reducers<StateType> = { [reducerName: string]: Reducer<StateType> }
export type PrepareReducers = { [reducerName: string]: PrepareReducer<any> }
export type Store = {
    name: string,
    state: Indexed,
    reducers: Reducers<any>
}
export type CreatingStoreOptions<StateType extends Indexed> = {
    name: string,
    initialState: StateType,
    reducers: Reducers<StateType>

}
export type GeneralStore = Array<Store>

class StateManager extends EventBus {
    private generalStore: GeneralStore = []
    //TODO тут прикол, что в generalStore лежит старое состояние, которое не обновляется, тк на нем не висит прокся,
    // состояние обновляется ток в generalStoreState
    public generalStoreState: Indexed = {}


    constructor() {
        super();
        this.generalStoreState = this.getGeneralStoreState()
        this.makeStoreStateProxy()
    }

    private makeStoreStateProxy = () => {
        const handlers: ProxyHandler<any> = {
            set: (target, p, value) => {
                target[p] = value;
                this.notify(StateManagerEvents.UPDATE);

                return true;
            },
        };
        this.generalStoreState = new Proxy(this.generalStoreState, handlers);
    };


    public getGeneralStoreState = (): Indexed => {
        return this.generalStore.reduce((acc, currentStore) => {

            return {
                ...acc,
                ...currentStore.state
            }
        }, {})
    }

    public registerStore<T>(options: CreatingStoreOptions<T>) {
        const preparedReducers: PrepareReducers = {}
        Object.entries(options.reducers).map(([reudcerName, reducer]) => {
            preparedReducers[reudcerName] = (data?: any) => {
                return reducer(this.generalStoreState, data)
            }
        })

        this.generalStore.push({
            name: options.name,
            state: options.initialState,
            reducers: preparedReducers
        })


        //TODO INITIAL state netu
        // this.generalStoreState = {
        //     ...this.generalStoreState,
        //     ...options.initialState
        // }
        return {
            reducers:preparedReducers
        }
    }

    public getState() {
        return this.generalStoreState
    }

}

const stateManager = new StateManager()
export default stateManager
