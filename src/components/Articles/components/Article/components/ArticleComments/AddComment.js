import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from "@material-ui/core/Button"
import validateForm from "../../../../../../form/validateForm";
import {ADD_COMMENT, SIGNIN_FORM} from "../../../../../../store/constants";
import FormField from "../../../../../../form/FormField";
import {reduxForm, Field} from "redux-form"

const AddCommentWrap = styled.div`
    display: flex;
    align-items: center;
`;

const ErrorForAllForm = styled.strong`
    color: red;
    padding: 10px 0;
`;

class AddComment extends Component {

    static propTypes = {
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data => {
        const {addCommentApi, reset, article_id} = this.props;

        return  validateForm(ADD_COMMENT, data)
            .then(() => {
                return addCommentApi({...data, article_id});
            })
            .then(res => {
                reset();
            });
    };

    render() {
        const {handleSubmit, submitting, message} = this.props;

        return (
            <AddCommentWrap>
                <form action=""
                    onSubmit={handleSubmit(this.onFormSubmit)}
                >
                    <Field
                        name={`comment`}
                        component={FormField}
                    />
                    <ErrorForAllForm>{message}</ErrorForAllForm>
                    <Button
                        type={`submit`}
                        variant={`contained`}
                        style={{marginLeft: "15px"}}
                    >
                        {submitting ? "Sending..." : "Add Article"}
                    </Button>
                </form>

            </AddCommentWrap>
        );
    }

}
;

AddComment.propTypes = {};

AddComment.defaultProps = {};

export default reduxForm({
    form: ADD_COMMENT
})(AddComment);