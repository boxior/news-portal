import { required, length } from "redux-form-validators";
import {SIGNIN_FORM} from "../store/constants";

export default {
    [SIGNIN_FORM]: {
        email: [required()],
        password: [required(), length({ min: 6 })]
    }
};