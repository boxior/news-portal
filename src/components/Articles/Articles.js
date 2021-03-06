import React, {Component} from "react";
import styled from "styled-components";
import {array, func, string, bool, object} from "prop-types";
import Article from "./components/Article/Article";
import {connect} from "react-redux"

import {
    addCommentApi,
    getArticlesApi,
    removeArticleApi,
    removeCommentApi,
} from "../../reducers/articles";

const ArticlesWrap = styled.div`
`;

const mapStateToProps = state => ({
    articles: state.articles.get("articles"),
    token: state.auth.get("token")
});

const mapDispatchToProps = dispatch => ({
    removeArticleApi: (slug) => dispatch(removeArticleApi(slug)),
    removeCommentApi: id => dispatch(removeCommentApi(id)),
    getArticlesApi: () =>
        dispatch(getArticlesApi()),
    addCommentApi: body =>
        dispatch(addCommentApi(body)),
});


class Articles extends Component {

    static propTypes = {
        articles: object,
        removeArticle: func,
        removeComments: func
    };

    componentDidMount() {
        const {getArticlesApi} = this.props;

        getArticlesApi();
    };

    render() {
        const {articles, removeCommentApi, addCommentApi, removeArticleApi, token} = this.props;

        return (
            <ArticlesWrap>
                {articles.map((row, index) =>
                    (<Article
                        key={index}
                        article_id={row.get("_id")}
                        article={row}
                        removeCommentApi={removeCommentApi}
                        removeArticleApi={removeArticleApi}
                        articles={articles}
                        addCommentApi={addCommentApi}
                        token={token}
                    />)
                )}
            </ArticlesWrap>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
