import React from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";

const NoMatchWrap = styled.h1`
    margin: 0 auto;
`;

const NoMatch = (props) => {
    const {} = props;

    return (
        <NoMatchWrap>
            NoMatchWrap
        </NoMatchWrap>
    );
};

NoMatch.propTypes = {};

NoMatch.defaultProps = {};

export default NoMatch;