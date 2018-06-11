import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const HeaderWrap = styled.h1`
    
`;

const Header = (props) => {
    const {title} = props;

    return (
        <HeaderWrap>
            {title}
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