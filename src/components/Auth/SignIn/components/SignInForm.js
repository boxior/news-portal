import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from '@material-ui/core/Button';
import validateForm from "../../../../form/validateForm";
import {SIGNIN_FORM} from "../../../../store/constants";
import {signInApi} from "../../../../reducers/auth";
import {reduxForm, Field} from "redux-form/immutable";
import FormField from "../../../../form/FormField";
import {connect} from "react-redux"

const SignInFormWrap = styled.div`
    
`;

const FormS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class SignInForm extends Component {

    static propTypes = {
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data =>
        validateForm(SIGNIN_FORM, data)
            .then(() => {
                const { signInApi } = this.props;

                return signInApi(data);
            })
            .then(res => {
                const { reset } = this.props;

                reset();
            });

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <SignInFormWrap>
                <FormS
                    onSubmit={handleSubmit(this.onFormSubmit)}
                >
                    <Field
                        name={`email`}
                        label={`Email`}
                        margin={`normal`}
                        type={`email`}
                        component={FormField}
                    />
                    <Field
                        name={`password`}
                        label={`Password`}
                        margin={`normal`}
                        type={`password`}
                        component={FormField}
                    />
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

export default connect(null, {
    signInApi
})(
    reduxForm({
        form: SIGNIN_FORM
    })(SignInForm)
);