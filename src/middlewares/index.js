export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';
export const START = '_START';
// to make middleware works, you have to app some special action property, which
// will be identify that this action is a client of fetching middleware. In this
// example we use `apiUrl`, but you can use another.

const rootUtl = `https://mateacademy-react-server.herokuapp.com/api/v1`;

const responseBody = res => {
    if(res.headers.get('Content-Type').search("application/json") !== -1) {
        return res.json();
    } else {
        return res.text;
    }
};

// you have to connect your middleware to store
const fetchMiddleware = store => next => action => {
    const {dispatch} = store;
    const {apiUrl, apiOptions, type} = action;
// if speacial property exist make logic

    if (apiUrl) {
// dispatch fetch start to handle `isFetching` status
        dispatch({type: type + START});
        fetch(rootUtl + apiUrl, apiOptions)
            .then(res => res.json())
            .then( res =>
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
    return next(action);
};

export default fetchMiddleware;