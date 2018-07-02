import React, {Component} from 'react';
import {string, object, array, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import SignUpForm from "./components/SignUpForm";
import {signUpApi} from "../../../reducers/auth";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    signUpApi: (body) =>
        dispatch(signUpApi(body))
});

class SignUpContainer extends Component {

    static propTypes = {

    };

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
