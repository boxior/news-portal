import {combineReducers} from "redux-immutable"
import articlesReducer from "../reducers/articles"
import articleReducer from "../reducers/article"
import auth from "../reducers/auth"
import signinReducer from "../reducers/signin"
import {reducer as formReducer} from "redux-form/immutable"

export default combineReducers({
    articles: articlesReducer,
    article: articleReducer,
    auth: auth,
    form: formReducer,
    // signin: signinReducer
});