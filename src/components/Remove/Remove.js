import React from "react";
import styled from "styled-components";
import {func, string, bool} from "prop-types";

const RemoveWrap = styled.button`
    padding: 5px 15px;
    color: red;
    border: none;
    background-color: transparent;
    
    &:hover {
        cursor: pointer;
    }
`;

const Remove = (props) => {
    const {onClick, label, isShowRemoveButtons} = props;

    return !isShowRemoveButtons ? null :
        (
            <RemoveWrap onClick={onClick}>
                remove {label}
            </RemoveWrap>
        );
};

Remove.propTypes = {
    onCLick: func,
    label: string,
    isShowRemoveButtons: bool
};

Remove.defaultProps = {
    text: "block",
    onClick: () => console.log("click")
};

export default Remove;