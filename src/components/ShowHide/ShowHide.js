import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
    const {isOpen, blockName, onToggle, id} = props;

    const onClick = (id) => (e) => {
        onToggle(id);
    };

    const Show = () => <ShowHideWrap onClick={onClick(id)}> {`show ${blockName}`} </ShowHideWrap>;
    const Hide = () => <ShowHideWrap onClick={onClick(id)}> {`hide ${blockName}`} </ShowHideWrap>;

    return isOpen ? <Hide/> : <Show/>;
};

ShowHide.propTypes = {
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    blockName: PropTypes.string,
    onToggle: PropTypes.func.isRequired
};

ShowHide.defaultProps = {
    isOpen: false,
    blockName: "block name",
};

export default ShowHide;