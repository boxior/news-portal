import {GET_TOKEN} from "../store/constants";
import {fromJS} from "immutable"
import {getCookie} from "../cookies";
import {SIGNIN} from "../middlewares/agent";
import {SUCCESS} from "../middlewares";

//Action creators

export const getToken = () => ({
    type: GET_TOKEN,
    token: getCookie("token")
});

//Initial state for this reducer

const initialState = fromJS({
    account: {
        email: "",
        name: ""
    },
    token: ""
});

const actionHandlers = {
    [GET_TOKEN]: (state, action) => {
        return  state.set("token", action.token);
    },
    [SIGNIN + SUCCESS]: (state, action) => {
        return  state.set("account", action.payload.account);
    }
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;