import React, {Component} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {addArticleApi} from "../../reducers/articles";
import {pathLogin} from "../layouts/CoreLayputs";
import {getArticleApi, updateArticleApi} from "../../reducers/article";
import {Map} from "immutable"

//styled

const EditArticleWrap = styled.div`
`;

const mapStateToProps = (state, props) => ({
    article: state.getIn(["article", "article", "data", "0"]),
    token: state.getIn(["auth", "token"]),
    slug: props.match.params.slug
});

const mapDispatchToProps = dispatch => ({
    updateArticleApi: (slug, body) =>
        dispatch(updateArticleApi(slug, body)),
    getArticleApi: slug =>
        dispatch(getArticleApi(slug))
});

class EditArticle extends Component {

    static propTypes = {
        addArticleApi: func
    };

    static defaultProps = {
        article: Map().set("title", "").set("text", "").set("isPublished", true).set("publicatedAt", Map())
    };


    state = {
        title: this.props.article.get("text"), // string, optional
        text: this.props.article.get("text"),  // string, optional
        isPublished: this.props.article.get("isPublished"), // boolean, optional
        publicatedAt: this.props.article.get("publicatedAt"), // date, optional
        image: "data:text/html;charset=UTF-8;base64,PEhUTUw+CjxIRUFEPgo8VElUTEU+TW92ZWQgUGVybWFuZW50bHk8L1RJVExFPgo8L0hFQUQ+CjxCT0RZIEJHQ09MT1I9IiNGRkZGRkYiIFRFWFQ9IiMwMDAwMDAiPgo8SDE+TW92ZWQgUGVybWFuZW50bHk8L0gxPgpUaGUgZG9jdW1lbnQgaGFzIG1vdmVkIDxBIEhSRUY9Imh0dHBzOi8vaW1hZ2VzLmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmZiaW5zdGFudGFydGljbGVzLmZpbGVzLndvcmRwcmVzcy5jb20lMkYyMDE2JTJGMDUlMkZzY3JlZW5fZmFzdF9tb2JpbGUuanBnJmFtcDtpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZpbnN0YW50YXJ0aWNsZXMuZmIuY29tJTJGJmFtcDtkb2NpZD1NanRNUUR5YmxVbldxTSZhbXA7dGJuaWQ9ZEw4NTJYUE5uRVdqN00lM0EmYW1wO3ZldD0xJmFtcDt3PTEwODAmYW1wO2g9OTIyJmFtcDtzb3VyY2U9c2glMkZ4JTJGaW0iPmhlcmU8L0E+Lgo8L0JPRFk+CjwvSFRNTD4K"
    };

    editArticleApi = (e) => {
        const {updateArticleApi, slug} = this.props;
        e.preventDefault();

        updateArticleApi(slug, this.state);
    };

    onChangeInput = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        const {slug, article, getArticleApi, token} = this.props;

        if(!article.get("title").size) {
            getArticleApi(slug);
        }

        // if(!token || token === "undefined") {
        //     this.props.history.push(pathLogin)
        // }
    };

    componentWillReceiveProps(nextProps) {
        const {article, token} = this.props;
        if(nextProps.article !== article) {
            this.setState({
                title: nextProps.article.get("title"),
                text: nextProps.article.get("text"),  // string, optional
                isPublished: nextProps.article.get("isPublished"), // boolean, optional
                publicatedAt: nextProps.article.get("publicatedAt"), // date, optional
            })
        }
        // if(nextProps.token !== token && (!token || token === "undefined")) {
        //     this.props.history.push(pathLogin)
        // }
    }

    render() {
        const {editArticleApi, onChangeInput} = this;
        const {title, text} = this.state;
        const {token} = this.props;

        return (
            <EditArticleWrap>
                <form
                    action=""
                    onSubmit={editArticleApi}
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
                        disabled={token && token !== "undefined" ? false : true}
                    >
                        Edit article
                    </Button>
                </form>
            </EditArticleWrap>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);