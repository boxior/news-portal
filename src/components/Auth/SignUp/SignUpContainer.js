import React, {Component} from 'react';
import {string, object, array, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import SignUpForm from "./components/SignUpForm";
import {signUpApi} from "../../../reducers/auth";

const mapStateToProps = state => ({
    token: state.auth.get("token"),
    message: state.auth.getIn(["account", "message"])
});

const mapDispatchToProps = dispatch => ({
    signUpApi: (body) =>
        dispatch(signUpApi(body))
});

class SignUpContainer extends Component {

    static propTypes = {};

    componentWillReceiveProps(nextProps) {
        const {token, history} = this.props;

        if (nextProps.token !== token && nextProps.token) {
            history.push('/');
        }
    }

    render() {
        const {signUpApi} = this.props;

        return (
            <SignUpForm
                signUpApi={signUpApi}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
