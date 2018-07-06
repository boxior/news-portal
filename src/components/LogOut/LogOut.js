import React from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from "@material-ui/core/Button"
import {deleteCookie} from "../../cookies";

const LogOutWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImgWrap = styled.div`
    font-size: 35px;
    padding-right: 15px;
`;

const LogOut = (props) => {
    const {userName, getToken} = props;

    const onClick = e => {
        deleteCookie("token");
        getToken();
    };

    return (
        <LogOutWrap>
            <ImgWrap>
                {userName}
            </ImgWrap>
            <Button
                variant="contained"
                onClick={onClick}
            >
                Logout
            </Button>
        </LogOutWrap>
    );
};

LogOut.propTypes = {};

LogOut.defaultProps = {};

export default LogOut;