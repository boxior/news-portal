import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';

const SignOutFormWrap = styled.div`
    
`;

const FormS = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class SignUpForm extends Component {

    state = {
        email: '',
        name: '', // min 2 symbols
        password: '', // min 6 symbols
        password_confirm: ''
    };

    onSubmit = e => {
        const {signUpApi} = this.props;

        e.preventDefault();

        signUpApi(this.state);
    };

    onChange = e => {
        const value = e.currentTarget.value;
        const property = e.currentTarget.name;

        this.setState({[property]: value});
    };


    render() {
        const {email, name, pass, passConfirm} = this.props;
        const {onSubmit, onChange} = this;

        return (
            <SignOutFormWrap>
                <FormS
                    action=""
                    onSubmit={onSubmit}
                >
                    <TextField
                        name={`email`}
                        label={`Email`}
                        value={email}
                        onChange={onChange}
                        margin={`normal`}
                        type={`email`}
                        required
                    />
                    <TextField
                        name={`name`}
                        label={`Name`}
                        value={name}
                        onChange={onChange}
                        margin={`normal`}
                        required
                    />
                    <TextField
                        name={`password`}
                        label={`Password`}
                        value={pass}
                        onChange={onChange}
                        margin={`normal`}
                        type={`password`}
                        required
                    />
                    <TextField
                        name={`password_confirm`}
                        label={`Password Confirm`}
                        value={passConfirm}
                        onChange={onChange}
                        margin={`normal`}
                        type={`password`}
                        required
                    />
                    <Button
                        type={`submit`}
                        variant="contained"
                    >
                        Sign Up
                    </Button>
                </FormS>
            </SignOutFormWrap>
        );
    };
};

export default SignUpForm;