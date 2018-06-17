import React from "react";
import {bool, func} from "prop-types";
import Switch from "react-switch";
import styled from "styled-components"

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`;

const LabelTitle = styled.span`
    font-size: 15px;
    line-height: 28px;
    color: grey;
    padding-left: 10px;
`;

class SwitchReact extends React.Component {

    render() {
        const {checked, onChange} = this.props;

        return (
            <Label htmlFor="normal-switch">
                <Switch
                    onChange={onChange}
                    checked={checked}
                    id="normal-switch"
                />
                <LabelTitle>Show/Hide remove buttons</LabelTitle>
            </Label>
        );
    }
};

SwitchReact.propTypes = {
    onChangeSwitch: func,
    checked: bool
};

SwitchReact.defaultProps = {};

export default SwitchReact;