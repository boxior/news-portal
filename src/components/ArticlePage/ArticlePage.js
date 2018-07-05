import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import {connect} from "react-redux"
import {getArticleApi} from "../../reducers/article";
import {Map} from "immutable"

const ArticlePageWrap = styled.div`
    
`;

const mapStateToProps = (state, props) => ({
    articles: state.getIn(["articles", "articles"]),
    article: state.getIn(["articles", "articles"]).find(article => article.get("slug") === props.match.params.slug)
});

const mapDispatchToProps = dispatch => ({
    getArticleApi: slug =>
        dispatch(getArticleApi(slug))
});


class ArticlePage extends Component {

    componentDidMount() {
        const {getArticleApi, article} = this.props;

        getArticleApi(Map(article).get("slug"))
    };

    render() {
        const {article, articles} = this.props;
        console.log("article", article);
        console.log("articles", articles);
        console.log("props.match.params", this.props.match.params.slug);
        return (
            <ArticlePageWrap>
                ArticlePageWrap
            </ArticlePageWrap>
        );

    }

};

ArticlePage.propTypes = {};

ArticlePage.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);