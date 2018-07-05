import {fromJS} from "immutable";
import {GET_ARTICLE} from "../store/constants";

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


const initialState = fromJS({
    article: null,
});

const actionHandlers = {
    ["GET_ARTICLE_SUCCESS"]: (state, action) => {
        return  state.set("article", fromJS(action.payload));
    }
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;