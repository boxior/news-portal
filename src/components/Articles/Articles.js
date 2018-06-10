import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Article from "./Article/Article";

const BodyAppWrap = styled.div`
    
`;

export default class Articles extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        articles: []
    };

    setArticles = () => {
        return this.props.articles.map(row => {
            return {
                ...row,
                isOpenArticle: false,
                isOpenComments: false
            }
        });
    };

    onToggleArticleText = (id) => {
        let newArticles = this.state.articles.map(row => {
            return id === row.id
                ?
                {
                    ...row,
                    isOpenArticle: !row.isOpenArticle,
                    isOpenComments: false
                }
                :
                {
                    ...row,
                    isOpenArticle: false
                }
        });

        this.setState({
            articles: newArticles
        });
    };

    onToggleComments = (id) => {
        let newArticles = this.state.articles.map(row => {
            return id === row.id ? {...row, isOpenComments: !row.isOpenComments} : row
        });

        this.setState({
            articles: newArticles
        });
    };

    componentDidMount() {
        this.setState({articles: this.setArticles()});
    };

    render() {
        return (
            <BodyAppWrap>
                {this.state.articles.map(row =>
                    <Article
                        key={row.id}
                        id={row.id}
                        article={row}
                        onToggleArticleText={this.onToggleArticleText}
                        onToggleComments={this.onToggleComments}
                        isOpenArticle={row.isOpenArticle}
                        isOpenComments={row.isOpenComments}
                    />
                )}
            </BodyAppWrap>
        );
    }
};
