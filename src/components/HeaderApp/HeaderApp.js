import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderAppWrap = styled.h1`
    
`;

const HeaderApp = (props) => {
    const {title} = props;

    return (
        <HeaderAppWrap>
            {title || HeaderApp.defaultProps.title}
        </HeaderAppWrap>
    );
};

HeaderApp.propTypes = {
    title: PropTypes.string
};

HeaderApp.defaultProps = {
    title: "default title"
};

export default HeaderApp;