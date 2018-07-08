import React, {Component} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from "@material-ui/core/Button"
import {addArticleApi} from "../../reducers/articles";
import {pathLogin} from "../layouts/CoreLayouts";
import {getCookie} from "../../cookies";
import validateForm from "../../form/validateForm";
import {ADD_ARTICLE, SIGNUP_FORM} from "../../store/constants";
import {reduxForm, Field} from "redux-form"
import FormField from "../../form/FormField";

//styled

const AddArticleWrap = styled.div`
`;

const ErrorForAllForm = styled.strong`
    color: red;
    padding: 10px 0;
`;

const mapStateToProps = state => ({
    articles: state.articles.get("articles"),
    token: state.auth.get("token"),
    isGetArticle: state.article.get("isGetArticle"),
    message: state.auth.getIn(["account", "message"])
});

const mapDispatchToProps = dispatch => ({
    addArticleApi: body =>
        dispatch(addArticleApi(body))
});

class AddArticle extends Component {

    static propTypes = {
        addArticleApi: func,
        handleSubmit: func.isRequired,
        submitting: bool.isRequired
    };

    onFormSubmit = data =>
        validateForm(ADD_ARTICLE, data)
            .then(() => {
                const {addArticleApi} = this.props;

                return addArticleApi({
                    ...data,
                    image: "data:text/html;charset=UTF-8;base64,PEhUTUw+CjxIRUFEPgo8VElUTEU+TW92ZWQgUGVybWFuZW50bHk8L1RJVExFPgo8L0hFQUQ+CjxCT0RZIEJHQ09MT1I9IiNGRkZGRkYiIFRFWFQ9IiMwMDAwMDAiPgo8SDE+TW92ZWQgUGVybWFuZW50bHk8L0gxPgpUaGUgZG9jdW1lbnQgaGFzIG1vdmVkIDxBIEhSRUY9Imh0dHBzOi8vaW1hZ2VzLmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmZiaW5zdGFudGFydGljbGVzLmZpbGVzLndvcmRwcmVzcy5jb20lMkYyMDE2JTJGMDUlMkZzY3JlZW5fZmFzdF9tb2JpbGUuanBnJmFtcDtpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZpbnN0YW50YXJ0aWNsZXMuZmIuY29tJTJGJmFtcDtkb2NpZD1NanRNUUR5YmxVbldxTSZhbXA7dGJuaWQ9ZEw4NTJYUE5uRVdqN00lM0EmYW1wO3ZldD0xJmFtcDt3PTEwODAmYW1wO2g9OTIyJmFtcDtzb3VyY2U9c2glMkZ4JTJGaW0iPmhlcmU8L0E+Lgo8L0JPRFk+CjwvSFRNTD4K"
                });
            })
            .then(res => {
                const {reset} = this.props;

                reset();
            });

    componentWillReceiveProps(nextProps) {
        const {token} = this.props;

        if (nextProps.isGetArticle !== this.props.isGetArticle && !nextProps.isGetArticle) {
            this.setState({title: "", text: ""});
        }

        if (nextProps.token !== token || (!token || token === "undefined")) {
            this.props.history.push(pathLogin)
        }
    };

    componentDidMount() {
        if (!getCookie("token") || getCookie("token") === "undefined") {
            this.props.history.push(pathLogin)
        }
    };

    render() {
        const {handleSubmit, submitting, message} = this.props;

        return (
            <AddArticleWrap>
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
                    <ErrorForAllForm>{message}</ErrorForAllForm>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        type={`submit`}
                        disabled={submitting}
                    >
                        {submitting ? "Sending..." : "Add Article"}
                    </Button>
                </form>
            </AddArticleWrap>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: ADD_ARTICLE
    })(AddArticle)
);