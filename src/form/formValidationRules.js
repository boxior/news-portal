import { required, email,  length } from "redux-form-validators";
import {ADD_ARTICLE, ADD_COMMENT, SIGNIN_FORM, SIGNUP_FORM, UPDATE_ARTICLE} from "../store/constants";

export default {
    [SIGNIN_FORM]: {
        email: [required(), email()],
        password: [required(), length({ min: 6 })]
    },
    [SIGNUP_FORM]: {
        email: [required(), email()],
        name: [required(), length({ min: 2 })],
        password: [required(), length({ min: 6 })],
        password_confirm: [required(), length({ min: 6 })]
    },
    [ADD_ARTICLE]: {
        title: [required()],
        text: [required()]
    },
    [ADD_COMMENT]: {
        comment: [required()]
    },
    [UPDATE_ARTICLE]: {
        title: [required()],
        text: [required()],
        isPublished: [required()],
        publicatedAt: [required()],
    }
};