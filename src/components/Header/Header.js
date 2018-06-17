import React from "react";
import styled from "styled-components";
import {string} from "prop-types";
import SwitchReact from "../SwitchReact/SwitchReact";
import ToggleShowContext from "../ToggleShowContext/ToggleShowContext"

const HeaderWrap = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Header = (props) => {
    const {title} = props;

    return (
        <HeaderWrap>
            {title}
            <ToggleShowContext.Consumer>
                { ({isShowRemoveButtons, toggleShowRemoveButtons}) =>
                    <SwitchReact
                        onChange={toggleShowRemoveButtons}
                        checked={isShowRemoveButtons}
                        id="normal-switch"
                    />
                }

            </ToggleShowContext.Consumer>

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