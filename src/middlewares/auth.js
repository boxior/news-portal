import {setCookie} from "../cookies";
import {getToken} from "../reducers/common";

export const auth = store => next => action => {
    const {type, payload} = action;
    const {dispatch} = store;

    if(type === "SIGNUP_SUCCESS" || type === "SIGNIN_SUCCESS") {
        setCookie("token", payload.token, payload.ttl);
        dispatch(getToken());
    }

    return next(action);
};