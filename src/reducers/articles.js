import articles from "../resourses/articles";
import {ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_COMMENTS} from "../store/constants";
import {fromJS, List, Map} from "immutable"

//Action creators

export const removeArticle = (articles) => ({
    type: REMOVE_ARTICLE,
    payload: articles
});

export const removeComments = (articles) => ({
    type: REMOVE_COMMENTS,
    payload: articles
});

export const addArticle = (article) => ({
    type: ADD_ARTICLE,
    payload: article
});

//Initial state for this reducer

const initialState = fromJS({
    articles: articles
});

const actionHandlers = {
    [REMOVE_ARTICLE]: (state, action) => {
        return state.set("articles", fromJS(action.payload));
    },
    [REMOVE_COMMENTS]: (state, action) => {
        return state.set("articles", fromJS(action.payload));
    },
    [ADD_ARTICLE]: (state, action) => {
        return  state.set("articles", List(state.get("articles")).push(Map(action.payload)));
    }
};

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;