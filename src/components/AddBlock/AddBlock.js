import React, {Component} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {addArticleApi} from "../../reducers/articles";
import {pathLogin} from "../layouts/CoreLayputs";

//styled

const AddBlockWrap = styled.div`
`;

const mapStateToProps = state => ({
    articles: state.getIn(["articles", "articles"]),
    token: state.getIn(["auth", "token"])
});

const mapDispatchToProps = dispatch => ({
    // addRemoveArticle: article => dispatch(addRemoveArticle(article)),
    addArticleApi: body =>
        dispatch(addArticleApi(body))
});

class AddBlock extends Component {

    static propTypes = {
        addArticleApi: func
    };

    static defaultProps = {};

    state = {
        title: "",
        text: "",
        image: "data:text/html;charset=UTF-8;base64,PEhUTUw+CjxIRUFEPgo8VElUTEU+TW92ZWQgUGVybWFuZW50bHk8L1RJVExFPgo8L0hFQUQ+CjxCT0RZIEJHQ09MT1I9IiNGRkZGRkYiIFRFWFQ9IiMwMDAwMDAiPgo8SDE+TW92ZWQgUGVybWFuZW50bHk8L0gxPgpUaGUgZG9jdW1lbnQgaGFzIG1vdmVkIDxBIEhSRUY9Imh0dHBzOi8vaW1hZ2VzLmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmZiaW5zdGFudGFydGljbGVzLmZpbGVzLndvcmRwcmVzcy5jb20lMkYyMDE2JTJGMDUlMkZzY3JlZW5fZmFzdF9tb2JpbGUuanBnJmFtcDtpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZpbnN0YW50YXJ0aWNsZXMuZmIuY29tJTJGJmFtcDtkb2NpZD1NanRNUUR5YmxVbldxTSZhbXA7dGJuaWQ9ZEw4NTJYUE5uRVdqN00lM0EmYW1wO3ZldD0xJmFtcDt3PTEwODAmYW1wO2g9OTIyJmFtcDtzb3VyY2U9c2glMkZ4JTJGaW0iPmhlcmU8L0E+Lgo8L0JPRFk+CjwvSFRNTD4K"
    };

    AddArticleApi = (e) => {
        const {addArticleApi} = this.props;
        e.preventDefault();

        addArticleApi(this.state);
    };

    onChangeInput = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        const {token, history} = this.props;

        if(!token || token === "undefined") {
            history.push(pathLogin);
        }
    };

    render() {
        const {AddArticleApi, onChangeInput} = this;
        const {title, text} = this.state;

        return (
            <AddBlockWrap>
                <form
                    action=""
                    onSubmit={AddArticleApi}
                >
                    <TextField
                        name={`title`}
                        label={`Enter article title`}
                        value={title}
                        onChange={onChangeInput}
                        fullWidth
                        margin={`normal`}
                        required
                    />
                    <TextField
                        name={`text`}
                        label={`Enter article text`}
                        value={text}
                        onChange={onChangeInput}
                        multiline={true}
                        rows={`3`}
                        fullWidth
                        margin={`normal`}
                        required
                    />
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        type={`submit`}
                    >
                        Add article
                    </Button>
                </form>
            </AddBlockWrap>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlock);