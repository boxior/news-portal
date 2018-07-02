import {combineReducers} from "redux-immutable"
import articlesReducer from "../reducers/articles"
import auth from "../reducers/auth"

export default combineReducers({
    articles: articlesReducer,
    auth: auth
});