import {fromJS} from "immutable";
import {ADD_ARTICLE, GET_ARTICLE, START, SUCCESS, UPDATE_ARTICLE} from "../store/constants";
import {getCookie} from "../cookies";

export const getArticleApi = (slug) => ({
    type: GET_ARTICLE,
    apiUrl: `/article/get/${slug}`,
    apiOptions: {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
});

export const updateArticleApi = (slug, body) => ({
    type: UPDATE_ARTICLE,
    apiUrl: `/article/update/${slug}`,
    apiOptions: {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
        }
    }
});


const initialState = fromJS({
    article: null,
    isGetArticle: false
});

const actionHandlers = {
    [(ADD_ARTICLE + START)]: (state, action) => {
        return  state.set("isGetArticle", true);
    },
    [(ADD_ARTICLE + SUCCESS)]: (state, action) => {
        return  state.set("isGetArticle", false);
    },
    [(GET_ARTICLE + SUCCESS)]: (state, action) => {
        return  state.set("article", fromJS(action.payload));
    }

};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;