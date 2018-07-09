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
        meta: {touched, error, submitting},
        fullWidth
    } = props;

    const onChange = (n, dateObj) => {
        input.onChange(new Date(moment(dateObj).format("LLLL")));
    };

    return (
        <DatePicker
            autoOk={true}
            floatingLabelText={label}
            defaultDate={new Date()}
            disableYearSelection={false}
            type={type}
            readOnly={submitting}
            {...input}
            onChange={onChange}
            formatDate={() => moment(input.value).format("LLLL")}
            value={new Date(moment(input.value).format("LLLL"))}
        />
    );
};

FormDatePicker.propTypes = {};

FormDatePicker.defaultProps = {};

export default FormDatePicker;