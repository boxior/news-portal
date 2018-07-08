import {combineReducers} from "redux"
import articlesReducer from "../reducers/articles"
import articleReducer from "../reducers/article"
import auth from "../reducers/auth"
import {reducer as formReducer} from "redux-form"

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer,
    auth: auth,
    form: formReducer,
});