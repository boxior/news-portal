import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import ToggleShowContext from "../components/ToggleShowContext/ToggleShowContext"
import AddBlock from "../components/AddBlock/AddBlock";
import Auth from "../components/Auth/Auth";
import LogOut from "../components/LogOut/LogOut";
import {connect} from "react-redux"
import styled from "styled-components"
import {getToken, getUserDetailsApi} from "../reducers/auth";
import {Map} from "immutable"

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
            <AppWrap>
                {token && token !== "undefined"
                    ?
                    <ToggleShowContext.Provider
                        value={{
                            isShowRemoveButtons: isShowRemoveButtons,
                            toggleShowRemoveButtons: toggleShowRemoveButtons
                        }}
                    >
                        <LogOut
                            getToken={getToken}
                            userName={Map(account).get("name")}
                        />
                        <Header title={title}/>
                        <Articles/>
                        <AddBlock/>
                    </ToggleShowContext.Provider>
                    :
                    <Auth

                    />
                }
            </AppWrap>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);