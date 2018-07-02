import React, {Component} from "react";
import styled from "styled-components";
import {array, func, string, bool, object} from "prop-types";
import Article from "./components/Article/Article";
import {connect} from "react-redux"
import {getArticlesApi, removeArticleApi, removeComments} from "../../reducers/articles";

const ArticlesWrap = styled.div`
    
`;

const mapStateToProps = state => ({
    articles: state.getIn(["articles", "articles"]),
});

const mapDispatchToProps = dispatch => ({
    removeArticleApi: (slug) => dispatch(removeArticleApi(slug)),
    removeComments: articles => dispatch(removeComments(articles)),
    getArticlesApi: () =>
        dispatch(getArticlesApi()),
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
        const {articles, removeArticleApi, removeComments} = this.props;

        return (
            <ArticlesWrap>
                {articles.map((row, index) =>
                    (<Article
                        key={index}
                        id={row.get("_id")}
                        article={row}
                        removeArticleApi={removeArticleApi}
                        removeComments={removeComments}
                        articles={articles}
                    />)
                )}
            </ArticlesWrap>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
