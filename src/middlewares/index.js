import {ADD_ARTICLE, REMOVE_ARTICLE, SIGNIN, SIGNUP} from "../store/constants";
import {getToken} from "../reducers/auth";
import {setCookie} from "../cookies";
import {getArticlesApi} from "../reducers/articles";

export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';
export const START = '_START';
// to make middleware works, you have to app some special action property, which
// will be identify that this action is a client of fetching middleware. In this
// example we use `apiUrl`, but you can use another.

const rootUtl = `https://mateacademy-react-server.herokuapp.com/api/v1`;

// you have to connect your middleware to store
const fetchMiddleware = store => next => action => {
    const {dispatch} = store;
    const {apiUrl, apiOptions, type, payload} = action;
// if speacial property exist make logic

    if (apiUrl) {
// dispatch fetch start to handle `isFetching` status
        dispatch({type: type + START});
        fetch(rootUtl + apiUrl, apiOptions)
            .then(res => {
                if (res.headers.get('Content-Type').search("application/json") !== -1) {
                    return res.json();
                }
                return Promise.resolve();
            })
            .then(res =>
                dispatch({
                    type: type + SUCCESS,
                    payload: res
                })
            )
            .catch(err => {
// handle ERROR
                dispatch({
                    type: type + ERROR,
                    payload: {error: true, err}
                });
            })
    }

    if(type === ADD_ARTICLE + SUCCESS || type === REMOVE_ARTICLE + SUCCESS) {
        dispatch(getArticlesApi());
    }

    if(type === SIGNIN + SUCCESS || type === SIGNUP + SUCCESS) {
        setCookie("token", payload.token, payload.ttl);
        dispatch(getToken());
    }

    return next(action);
};

export default fetchMiddleware;