import {combineReducers} from "redux-immutable"
import articlesReducer from "../reducers/articles"
import common from "../reducers/common"

export default combineReducers({
    articles: articlesReducer,
    common: common
});