import {ADD_ARTICLE, REMOVE_ARTICLE} from "../store/constants";
import {getCookie} from "../cookies";

export const GET_ARTICLES = "GET_ARTICLES";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

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
    apiUrl: `/article/remove/:${slug}`,
    apiOptions: {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("token")
        }
    }
});