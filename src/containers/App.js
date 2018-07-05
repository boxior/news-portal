import React, {Component} from 'react';
import Header from "../components/Header/Header";
import ToggleShowContext from "../components/ToggleShowContext/ToggleShowContext"
import {connect} from "react-redux"
import styled from "styled-components"
import {getToken, getUserDetailsApi} from "../reducers/auth";
import CoreLayout from "../components/layouts/CoreLayputs";
import {Route} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"


const AppWrap = styled.div`
  
`;

const mapStateToProps = state => ({
    token: state.getIn(["auth", "token"]),
    account: state.getIn(["auth", "account"])
});

const mapDispatchToProps = dispatch => ({
    getToken: () =>
        dispatch(getToken()),
    getUserDetailsApi: () =>
        dispatch(getUserDetailsApi())
});

class App extends Component {

    state = {
        isShowRemoveButtons: true
    };

    toggleShowRemoveButtons = () => {
        this.setState(prev => {
            return {isShowRemoveButtons: !prev.isShowRemoveButtons}
        });
    };

    componentDidMount() {
        const {getToken, getUserDetailsApi} = this.props;

        getToken();
        getUserDetailsApi();
    };

    render() {
        const title = "News portal";
        const {toggleShowRemoveButtons} = this;
        const {isShowRemoveButtons} = this.state;
        const {token, getToken, account} = this.props;

        return (
            <BrowserRouter>
                <AppWrap>
                    <ToggleShowContext.Provider
                        value={{
                            isShowRemoveButtons: isShowRemoveButtons,
                            toggleShowRemoveButtons: toggleShowRemoveButtons
                        }}
                    >
                        <React.Fragment>
                            <Header
                                title={title}
                                getToken={getToken}
                                account={account}
                                token={token}
                            />
                            <Route path={`/`} component={CoreLayout}/>
                        </React.Fragment>

                    </ToggleShowContext.Provider>
                </AppWrap>
            </BrowserRouter>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);