import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import {connect} from "react-redux"
import {getArticleApi} from "../../reducers/article";
import {Map} from "immutable"
import {pathEditArticle} from "../layouts/CoreLayouts";
import {Link} from "react-router-dom"

const ArticlePageWrap = styled.div`
    
`;

const mapStateToProps = (state, props) => ({
    token: state.getIn(["auth", "token"]),
    articles: state.getIn(["articles", "articles"]),
    slug: props.match.params.slug,
    article: state.getIn(["article", "article", "data", "0"])
});

const mapDispatchToProps = dispatch => ({
    getArticleApi: slug =>
        dispatch(getArticleApi(slug))
});

const ArticleTitle = styled.h1`
  
`;

const ArticleText = styled.p`
  
`;


class ArticlePage extends Component {

    componentDidMount() {
        const {getArticleApi, slug} = this.props;

        getArticleApi(slug)
    };

    render() {
        const {article, token, slug} = this.props;

        return Map.isMap(article) ? (
            <ArticlePageWrap>
                {token && token !== "undefined" ?
                    <Link to={`/edit-article/${slug}`}>Edit Article</Link> : null
                }
                <ArticleTitle>{article.get("title")}</ArticleTitle>
                <ArticleText>{article.get("text")}</ArticleText>
            </ArticlePageWrap>
        ) : null;

    }

};

ArticlePage.propTypes = {};

ArticlePage.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);