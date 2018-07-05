import React, {Component} from "react";
import styled from "styled-components";
import {array, func, string, bool, object} from "prop-types";
import Article from "./components/Article/Article";
import {connect} from "react-redux"
import SwitchReact from "../SwitchReact/SwitchReact";
import ToggleShowContext from "../ToggleShowContext/ToggleShowContext"

import {
    addCommentApi,
    getArticlesApi,
    removeArticleApi,
    removeCommentApi,
} from "../../reducers/articles";

const ArticlesWrap = styled.div`
`;

const ArticlesHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const mapStateToProps = state => ({
    articles: state.getIn(["articles", "articles"]),
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
        const {articles, removeCommentApi, addCommentApi, removeArticleApi} = this.props;

        return (
            <ArticlesWrap>
                <ArticlesHeader>
                    <ToggleShowContext.Consumer>
                        {({isShowRemoveButtons, toggleShowRemoveButtons}) =>
                            <SwitchReact
                                onChange={toggleShowRemoveButtons}
                                checked={isShowRemoveButtons}
                                id="normal-switch"
                            />
                        }

                    </ToggleShowContext.Consumer>
                </ArticlesHeader>

                {articles.map((row, index) =>
                    (<Article
                        key={index}
                        article_id={row.get("_id")}
                        article={row}
                        removeCommentApi={removeCommentApi}
                        removeArticleApi={removeArticleApi}
                        articles={articles}
                        addCommentApi={addCommentApi}
                    />)
                )}
            </ArticlesWrap>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
