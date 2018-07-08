import { FORM_SEND, START, SUCCESS, ERROR } from "../store/constants";
import { RSAA } from "redux-api-middleware";

export const signInApi = ({ email, password }) => dispatch =>
    dispatch({
        [RSAA]: {
            method: "POST",
            endpoint: "/auth/signin",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-type": "application/json"
            },
            types: [FORM_SEND + START, FORM_SEND + SUCCESS, FORM_SEND + ERROR]
        }
    });

const initialState = {};

const actionHandlers = {
    [FORM_SEND + START]: state => state,
    [FORM_SEND + SUCCESS]: state => state,
    [FORM_SEND + ERROR]: state => state
};

function reducer(state = initialState, action) {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
}

export default reducer;
