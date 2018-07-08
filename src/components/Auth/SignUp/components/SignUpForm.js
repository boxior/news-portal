import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from '@material-ui/core/Button';
import validateForm from "../../../../form/validateForm";
import {SIGNUP_FORM} from "../../../../store/constants";
import FormField from "../../../../form/FormField";
import {reduxForm, Field} from "redux-form"

const SignOutFormWrap = styled.div`
    
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

class SignUpForm extends Component {

    static propTypes = {
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data =>
        validateForm(SIGNUP_FORM, data)
            .then(() => {
                const {signUpApi} = this.props;

                return signUpApi(data);
            })
            .then(res => {
                const {reset} = this.props;

                reset();
            });

    render() {
        const {handleSubmit, submitting, message} = this.props;

        return (
            <SignOutFormWrap>
                <FormS
                    action=""
                    onSubmit={handleSubmit(this.onFormSubmit)}
                >
                    <Field
                        name={`email`}
                        label={`Email`}
                        margin={`normal`}
                        component={FormField}
                    />
                    <Field
                        name={`name`}
                        label={`Name`}
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
                    <Field
                        name={`password_confirm`}
                        label={`Password Confirm`}
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
                        {submitting ? "Sending..." : "Sign Up"}
                    </Button>
                </FormS>
            </SignOutFormWrap>
        );
    };
};

export default reduxForm({
    form: SIGNUP_FORM
})(SignUpForm);