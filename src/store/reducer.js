import {combineReducers} from "redux-immutable"
import articlesReducer from "../reducers/articles"
import articleReducer from "../reducers/article"
import auth from "../reducers/auth"

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer,
    auth: auth

});