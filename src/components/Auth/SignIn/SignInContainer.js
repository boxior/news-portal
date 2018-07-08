import React, {Component} from 'react';
import {string, object, array, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import SignInForm from "./components/SignInForm";
import {signInApi} from "../../../reducers/auth";

const mapStateToProps = state => ({
    token: state.auth.get("token"),
    message: state.auth.getIn(["account", "message"])
});

const mapDispatchToProps = dispatch => ({
    signInApi: body =>
        dispatch(signInApi(body)),
});

class SignInContainer extends Component {

    static propTypes = {

    };

    componentDidMount() {
        const {token, history} = this.props;

        if(token && token !== "undefined") {
            history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        const {token, history} = this.props;

        if(nextProps.token !== token && (nextProps.token && nextProps.token !== "undefined")) {
            history.push('/');
        }
    }

    render() {
        const {signInApi, message} = this.props;

        return (
                <SignInForm
                    signInApi={signInApi}
                    message={message}
                />
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
