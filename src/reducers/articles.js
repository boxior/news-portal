import articles from "../resourses/articles";
import {ADD_ARTICLE, REMOVE_ARTICLE, REMOVE_COMMENTS} from "../store/constants";
import {fromJS, List, Map} from "immutable"
import {GET_ARTICLES} from "../middlewares/agent";
import {SUCCESS} from "../middlewares";

//Action creators

export const removeComments = (articles) => ({
    type: REMOVE_COMMENTS,
    payload: articles
});

//Initial state for this reducer

const initialState = fromJS({
    articles: articles
});

const actionHandlers = {
    // [REMOVE_ARTICLE + SUCCESS]: (state, action) => {
    //     return state.set("articles", fromJS(action.payload));
    // },
    [REMOVE_COMMENTS]: (state, action) => {
        return state.set("articles", fromJS(action.payload));
    },
    // [ADD_ARTICLE + SUCCESS]: (state, action) => {
    //     return  state.set("articles", List(state.get("articles")).push(Map(action.payload)));
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