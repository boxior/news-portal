import {createStore, compose} from "redux"
import rootReducer from "./reducer"
import {fromJS} from "immutable";

const initialState = fromJS({});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            maxAge: 10
        }) : compose;

const store = createStore(rootReducer, initialState, composeEnhancers());

export default store;