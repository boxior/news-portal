import React from "react";
import {object, array, string, bool, func} from "prop-types";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const FormField = (props) => {
    const {
        input,
        type,
        label,
        placeholder,
        meta: { touched, error, submitting },
        fullWidth
    } = props;

    return (
        <FormControl
            error={error ? true : false}
            aria-describedby="name-error-text"
            fullWidth={fullWidth}
        >
            <InputLabel>{label}</InputLabel>
            <Input
                hinttext={placeholder}
                type={type}
                readOnly={submitting}
                {...input}
            />
            <FormHelperText

            >
                {touched && error ? error : ""}
            </FormHelperText>
        </FormControl>
    );
};

FormField.propTypes = {};

FormField.defaultProps = {
    type: "text"
};

export default FormField;