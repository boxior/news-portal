import React from "react";
import styled from "styled-components";
import {string} from "prop-types";
import {Link} from "react-router-dom"
import LogOut from "../LogOut/LogOut";
import {Map} from "immutable"

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

const Header = (props) => {
    const {title, account, getToken, token} = props;

    return (
        <HeaderWrap>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderBody>
                <Link to={`/`}>Home page</Link>

                {
                    token && token !== "undefined"
                        ?
                        <LogOut
                            getToken={getToken}
                            userName={Map(account).get("name")}
                        />
                        :
                        <Link to={`/login`}>Login</Link>
                }

            </HeaderBody>
        </HeaderWrap>
    );
};

Header.propTypes = {
    title: string
};

Header.defaultProps = {
    title: "default title"
};

export default Header;