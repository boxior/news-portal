import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducer"
import {fromJS} from "immutable";
import index from "../middlewares/index";
import thunk from "redux-thunk";
import {auth} from "../middlewares/auth";
import {addRemoveArticle} from "../middlewares/addRemoveArticle";

const initialState = fromJS({});
const enhancers = [];
const middleware = [thunk, index, auth, addRemoveArticle /*, apiMiddleware */];

const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;