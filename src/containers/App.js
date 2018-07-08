import React, {Component} from 'react';
import {connect} from "react-redux"
import styled from "styled-components"
import {getToken, getUserDetailsApi} from "../reducers/auth";
import CoreLayout from "../components/layouts/CoreLayouts";
import {Route} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"


const AppWrap = styled.div`
  
`;

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    getToken: () =>
        dispatch(getToken()),
    getUserDetailsApi: () =>
        dispatch(getUserDetailsApi())
});

class App extends Component {

    componentDidMount() {
        const {getToken, getUserDetailsApi} = this.props;

        getToken();
        getUserDetailsApi();
    };

    render() {
        return (
            <BrowserRouter>
                <AppWrap>
                    <React.Fragment>
                        <Route
                            path={`/`}
                            component={CoreLayout}
                        />
                    </React.Fragment>
                </AppWrap>
            </BrowserRouter>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);