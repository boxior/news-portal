import React, {Component} from "react";
import styled from "styled-components";
import {object} from "prop-types";
import ShowHide from "../../../ShowHide/ShowHide";
import ArticleDate from "./components/ArticleDate";
import ArticleText from "./components/ArticleText";
import ArticleTitle from "./components/ArticleTitle";
import ArticleComments from "./components/ArticleComments/ArticleComments";

//styled


const ArticleWrap = styled.div`
  
`;

const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleBody = styled.div`
  
`;

class Article extends Component {

    static propTypes = {
        article: object.isRequired
    };

    state = {
        isOpenArticle: false
    };

    onToggleArticle = () => {

        this.setState(prevState => {
            return {isOpenArticle: !prevState.isOpenArticle}
        });
    };

    render() {
        const {article} = this.props;
        const {isOpenArticle} = this.state;

        return (
            <ArticleWrap>
                <ArticleHeader>
                    <ArticleTitle title={article.title}/>
                    <ShowHide
                        isOpenArticle={isOpenArticle}
                        blockName={"article"}
                        onToggle={this.onToggleArticle}
                    />
                </ArticleHeader>

                <ArticleBody>
                    <ArticleDate date={article.date}/>
                    <ArticleText
                        text={article.text}
                        isOpenArticle={isOpenArticle}/>
                    {isOpenArticle &&
                    <ArticleComments
                        comments={article.comments}
                    />}
                </ArticleBody>
            </ArticleWrap>
        );
    }
};

export default Article;