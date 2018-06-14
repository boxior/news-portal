import React from "react";
import styled from "styled-components";
import {string, bool, func} from "prop-types";

const ShowHideWrap = styled.button`
    padding: 5px 15px;
    color: blue;
    border: none;
    background-color: transparent;
    
    &:hover {
        cursor: pointer;
    }
`;

const ShowHide = (props) => {
    const {isOpenArticle, blockName, onToggle} = props;

    const Show = () => <ShowHideWrap onClick={onToggle}> {`show ${blockName}`} </ShowHideWrap>;
    const Hide = () => <ShowHideWrap onClick={onToggle}> {`hide ${blockName}`} </ShowHideWrap>;

    return isOpenArticle ? <Hide/> : <Show/>;
};

ShowHide.propTypes = {
    id: string,
    isOpen: bool,
    blockName: string,
    onToggle: func.isRequired
};

ShowHide.defaultProps = {
    isOpen: false,
    blockName: "block name",
};

export default ShowHide;