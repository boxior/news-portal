import React, {Component} from 'react';
import {string, object, array, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import SignInForm from "./components/SignInForm";
import {signInApi} from "../../../reducers/auth";

const mapStateToProps = state => ({
    token: state.getIn(["auth", "token"]),
});

const mapDispatchToProps = dispatch => ({
    signInApi: body =>
        dispatch(signInApi(body)),
});

class SignInContainer extends Component {

    static propTypes = {

    };

    componentWillReceiveProps(nextProps) {
        const {token, history} = this.props;

        if(nextProps.token !== token && nextProps.token) {
            history.push('/');
        }
    }

    render() {
        const {signInApi, getArticlesApi} = this.props;

        return (
                <SignInForm
                    getArticlesApi={getArticlesApi}
                    signInApi={signInApi}
                />
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
