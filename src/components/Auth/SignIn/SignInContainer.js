import React, {Component} from 'react';
import {string, object, array, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import SignInForm from "./components/SignInForm";
import {getArticlesApi, signInApi} from "../../../middlewares/agent";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    signInApi: body =>
        dispatch(signInApi(body)),
});

class SignInContainer extends Component {

    static propTypes = {

    };

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
