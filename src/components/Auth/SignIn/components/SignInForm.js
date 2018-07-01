import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';
import {setCookie} from "../../../../cookies";

const SignInFormWrap = styled.div`
    
`;

const FormS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class SignInForm extends Component {

    state = {
        email: '',
        password: ''  // min 6 symbols
    };

    onSubmit = e => {
        const {signInApi} = this.props;

        e.preventDefault();

        signInApi(this.state);
    };

    onChange = e => {
        const value = e.currentTarget.value;
        const property = e.currentTarget.name;

        this.setState({[property]: value});
    };

    render() {
        const {} = this.props;
        const {onSubmit, onChange} = this;

        return (
            <SignInFormWrap>
                <FormS
                    action=""
                    onSubmit={onSubmit}
                >
                    <TextField
                        name={`email`}
                        label={`Email`}
                        margin={`normal`}
                        type={`email`}
                        onChange={onChange}
                        required
                    />
                    <TextField
                        name={`password`}
                        label={`Password`}
                        margin={`normal`}
                        type={`password`}
                        onChange={onChange}
                        required
                    />
                    <Button
                        type={`submit`}
                        variant="contained"
                    >
                        Sign In
                    </Button>
                </FormS>
            </SignInFormWrap>
        );
    };

};

SignInForm.propTypes = {};

SignInForm.defaultProps = {};

export default SignInForm;