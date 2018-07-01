import {ADD_ARTICLE, REMOVE_ARTICLE} from "../store/constants";
import {ERROR, SUCCESS} from "./index";
import {getArticlesApi} from "./agent";

export const addRemoveArticle = store => next => action => {
    const {type, payload} = action;
    const {dispatch} = store;

    if(type === ADD_ARTICLE + SUCCESS || type === REMOVE_ARTICLE + SUCCESS) {
        dispatch(getArticlesApi());
    }

    return next(action);
};