import React, {Component} from "react";
import styled from "styled-components";
import {string} from "prop-types";
import {Link} from "react-router-dom"
import LogOut from "../LogOut/LogOut";
import {Map} from "immutable"
import {pathAddArticle, pathHome, pathLogin, pathRegister} from "../layouts/CoreLayouts";
import {getToken} from "../../reducers/auth";
import {connect} from "react-redux"

const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const mapStateToProps = state => ({
    token: state.auth.get("token"),
    account: state.auth.get("account")
    // account: state.getIn(["auth", "account"])
});

const mapDispatchToProps = dispatch => ({
    getToken: () =>
        dispatch(getToken()),
});

class Header extends Component {

    render() {
        const {account, getToken, token, location} = this.props;
        const title = "News portal";

        return (
            <HeaderWrap>
                <HeaderTitle>{title}</HeaderTitle>
                <HeaderBody>
                    <Link to={pathHome}>Home page</Link>

                    {
                        (token && token !== "undefined")
                            ?
                            <React.Fragment>
                                <Link to={pathAddArticle}>Add Article</Link>
                                <LogOut
                                    getToken={getToken}
                                    userName={Map(account).get("name")}
                                />
                            </React.Fragment>
                            :
                            location.pathname === pathLogin
                                ?
                                <Link to={pathRegister}>Register</Link>
                                :
                                <Link to={pathLogin}>Login</Link>
                    }

                </HeaderBody>
            </HeaderWrap>
        );
    }

};

Header.propTypes = {
    title: string
};

Header.defaultProps = {
    title: "default title"
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);