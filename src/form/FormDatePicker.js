import React from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import DatePicker from "material-ui/DatePicker"
import moment from "moment"

const FormDatePickerWrap = styled.div`
    
`;

const FormDatePicker = (props) => {
    const {
        input,
        type,
        label,
        placeholder,
        meta: { touched, error, submitting },
        fullWidth
    } = props;

    return (
        <DatePicker
            autoOk={false}
            floatingLabelText="Min Date"
            defaultDate={new Date()}
            disableYearSelection={false}
            type={type}
            readOnly={submitting}
            {...input}
            value={new Date(input.value)}
        />
    );
};

FormDatePicker.propTypes = {};

FormDatePicker.defaultProps = {};

export default FormDatePicker;