import {GET_TOKEN, GET_USER_DETAILS, SIGNIN, SIGNUP} from "../store/constants";
import {fromJS, Map} from "immutable"
import {getCookie} from "../cookies";
import {SUCCESS} from "../middlewares";

//Action creators

export const getToken = () => ({
    type: GET_TOKEN,
    token: getCookie("token")
});

export const getUserDetailsApi = () => ({
    type: GET_USER_DETAILS,
    apiUrl: `/user/details`,
    apiOptions: {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
        }
    }
});

export const signInApi = body => ({
    type: SIGNIN,
    apiUrl: `/auth/signin`,
    apiOptions: {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
});

export const signUpApi = body => ({
    type: SIGNUP,
    apiUrl: `/auth/signup`,
    apiOptions: {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
});

//Initial state for this reducer

const initialState = fromJS({
    account: null,
    token: ""
});

const actionHandlers = {
    [GET_TOKEN]: (state, action) => {
        return  state.set("token", action.token);
    },
    ["SIGNIN_SUCCESS"]: (state, action) => {
        return  state.set("account", fromJS(action.payload.account));
    },
    ["GET_USER_DETAILS_SUCCESS"]: (state, action) => {
        return  state.set("account", fromJS(action.payload));
    }
};

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
};

export default reducer;