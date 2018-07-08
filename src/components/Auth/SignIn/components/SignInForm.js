import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from '@material-ui/core/Button';
import validateForm from "../../../../form/validateForm";
import {SIGNIN_FORM} from "../../../../store/constants";
import {reduxForm, Field} from "redux-form";
import FormField from "../../../../form/FormField";

const SignInFormWrap = styled.div`
    
`;

const FormS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ErrorForAllForm = styled.strong`
    color: red;
    padding: 10px 0;
`;

class SignInForm extends Component {

    static propTypes = {
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data => {
        const {signInApi, reset} = this.props;

        return  validateForm(SIGNIN_FORM, data)
            .then(() => {
                return signInApi(data);
            })
            .then(res => {
                reset();
            });
    }


    render() {
        const {handleSubmit, submitting, message} = this.props;

        return (
            <SignInFormWrap>
                <FormS
                    onSubmit={handleSubmit(this.onFormSubmit)}
                >
                    <Field
                        name={`email`}
                        label={`Email`}
                        margin={`normal`}
                        component={FormField}
                    />
                    <Field
                        name={`password`}
                        label={`Password`}
                        margin={`normal`}
                        type={`password`}
                        component={FormField}
                    />
                    <ErrorForAllForm>{message}</ErrorForAllForm>
                    <Button
                        type={`submit`}
                        variant="contained"
                        disabled={submitting}
                    >
                        {submitting ? "Sending..." : "Sign In"}
                    </Button>
                </FormS>
            </SignInFormWrap>
        );
    };

};

SignInForm.propTypes = {};

SignInForm.defaultProps = {};

export default reduxForm({
    form: SIGNIN_FORM
})(SignInForm);