import React from "react";
import {object, array, string, bool, func} from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const FormCheckbox = (props) => {
    const {
        input,
        type,
        label,
        placeholder,
        meta: { touched, error, submitting },
    } = props;

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        type={type}
                        readOnly={submitting}
                        {...input}
                    />
                }
                label={label}
            />
            <FormHelperText>{touched && error ? error : ""}</FormHelperText>
        </FormControl>
    );
};

FormCheckbox.propTypes = {};

FormCheckbox.defaultProps = {};

export default FormCheckbox;