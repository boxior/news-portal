import React from "react";
import styled from "styled-components";
import {array, func, string, bool, object} from "prop-types";
import Article from "./components/Article/Article";
import {connect} from "react-redux"
import {removeArticle, removeComments} from "../../reducers/articles";

const ArticlesWrap = styled.div`
    
`;

const mapStateToProps = state => ({
    articles: state.getIn(["articles", "articles"]),
});

const mapDispatchToProps = dispatch => ({
    removeArticle: articles => dispatch(removeArticle(articles)),
    removeComments: articles => dispatch(removeComments(articles))
});


class Articles extends React.Component {

    static propTypes = {
        articles: object,
        removeArticle: func,
        removeComments: func
    };

    render() {
        const {articles, removeArticle, removeComments} = this.props;

        return (
            <ArticlesWrap>
                {articles.map(row =>
                    (<Article
                        key={row.get("id")}
                        id={row.get("id")}
                        article={row}
                        removeArticle={removeArticle}
                        removeComments={removeComments}
                        articles={articles}
                    />)
                )}
            </ArticlesWrap>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
