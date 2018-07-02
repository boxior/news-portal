import articles from "../resourses/articles";
import {ADD_ARTICLE, GET_ARTICLES, REMOVE_ARTICLE, REMOVE_COMMENTS, SIGNIN, SIGNUP} from "../store/constants";
import {fromJS, List, Map} from "immutable"
import {SUCCESS} from "../middlewares";
import {getCookie} from "../cookies";

//Action creators

export const removeComments = (articles) => ({
    type: REMOVE_COMMENTS,
    payload: articles
});

export const getArticlesApi = () => ({
    type: GET_ARTICLES,
    apiUrl: `/article/get`,
    apiOptions: {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
});

export const addArticleApi = body => ({
    type: ADD_ARTICLE,
    apiUrl: `/article/create`,
    apiOptions: {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
        }
    }
});

export const removeArticleApi = slug => ({
    type: REMOVE_ARTICLE,
    apiUrl: `/article/remove/${slug}`,
    apiOptions: {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
        }
    }
});

//Initial state for this reducer

const initialState = fromJS({
    articles: articles,
});

const actionHandlers = {
    // [REMOVE_COMMENTS]: (state, action) => {
    //     return state.set("articles", fromJS(action.payload));
    // },
    [GET_ARTICLES + SUCCESS]: (state, action) => {
        return  state.set("articles", fromJS(action.payload.items));
    }
};

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;