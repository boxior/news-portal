import React, {Component} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from "@material-ui/core/Button"
import validateForm from "../../form/validateForm";
import {UPDATE_ARTICLE} from "../../store/constants";
import {reduxForm, Field} from "redux-form"
import FormField from "../../form/FormField";
import FormCheckbox from "../../form/FormCheckbox";
import FormDatePicker from "../../form/FormDatePicker";

//styled

const EditArticleWrap = styled.div`
`;

const ErrorForAllForm = styled.strong`
    color: red;
    padding: 10px 0;
`;

class EditArticleForm extends Component {

    static propTypes = {
        addArticleApi: func,
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data => {
        const {updateArticleApi, reset, slug} = this.props;

        return validateForm(UPDATE_ARTICLE, data)
            .then(() => {
                return updateArticleApi(slug, data);
            })
            .then(res => {
                // reset();
                console.log("update article");
            });
    }

    render() {
        const {handleSubmit, submitting, message} = this.props;

        return  (
            <EditArticleWrap>
                <form
                    action=""
                    onSubmit={handleSubmit(this.onFormSubmit)}
                >
                    <Field
                        name={`title`}
                        label={`Enter article title`}
                        fullWidth={true}
                        margin={`normal`}
                        component={FormField}
                    />
                    <Field
                        name={`text`}
                        label={`Enter article text`}
                        multiline={true}
                        rows={`3`}
                        fullWidth={true}
                        margin={`normal`}
                        component={FormField}
                    />
                    <Field
                        name={`isPublished`}
                        type={`checkbox`}
                        label={`Is Published ?`}
                        multiline={true}
                        fullWidth={true}
                        margin={`normal`}
                        component={FormCheckbox}
                    />
                    <Field
                        name={`publicatedAt`}
                        label={`Choose date`}
                        multiline={true}
                        fullWidth={true}
                        margin={`normal`}
                        component={FormDatePicker}
                    />
                    <ErrorForAllForm>{message}</ErrorForAllForm>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        type={`submit`}
                        disabled={submitting}
                    >
                        {submitting ? "Updating" : "Edit Article"}
                    </Button>
                </form>
            </EditArticleWrap>
        );
    };
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditArticleForm = reduxForm({
    form: UPDATE_ARTICLE // a unique identifier for this form
})(EditArticleForm);

// You have to connect() to any reducers that you wish to connect to yourself
EditArticleForm = connect(
    (state, props) => ({
        initialValues: {
            title: props.article.get("title"),
            text: props.article.get("text"),
            isPublished: props.article.get("isPublished"),
            publicatedAt: props.article.get("publicatedAt"),
            image: "data:text/html;charset=UTF-8;base64,PEhUTUw+CjxIRUFEPgo8VElUTEU+TW92ZWQgUGVybWFuZW50bHk8L1RJVExFPgo8L0hFQUQ+CjxCT0RZIEJHQ09MT1I9IiNGRkZGRkYiIFRFWFQ9IiMwMDAwMDAiPgo8SDE+TW92ZWQgUGVybWFuZW50bHk8L0gxPgpUaGUgZG9jdW1lbnQgaGFzIG1vdmVkIDxBIEhSRUY9Imh0dHBzOi8vaW1hZ2VzLmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmZiaW5zdGFudGFydGljbGVzLmZpbGVzLndvcmRwcmVzcy5jb20lMkYyMDE2JTJGMDUlMkZzY3JlZW5fZmFzdF9tb2JpbGUuanBnJmFtcDtpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZpbnN0YW50YXJ0aWNsZXMuZmIuY29tJTJGJmFtcDtkb2NpZD1NanRNUUR5YmxVbldxTSZhbXA7dGJuaWQ9ZEw4NTJYUE5uRVdqN00lM0EmYW1wO3ZldD0xJmFtcDt3PTEwODAmYW1wO2g9OTIyJmFtcDtzb3VyY2U9c2glMkZ4JTJGaW0iPmhlcmU8L0E+Lgo8L0JPRFk+CjwvSFRNTD4K"
        } // pull initial values from account reducer
    })
)(EditArticleForm);

export default EditArticleForm;