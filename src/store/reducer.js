import {combineReducers} from "redux-immutable"
import articlesReducer from "../reducers/articles"

export default combineReducers({
    articles: articlesReducer
});