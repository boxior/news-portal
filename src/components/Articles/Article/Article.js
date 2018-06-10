import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ShowHide from "../../ShowHide/ShowHide";
import ArticleDate from "./ArticleDate/ArticleDate";
import ArticleText from "./ArticleText/ArticleText";
import ArticleTitle from "./ArticleTitle/ArticleTitle";
import ArticleComments from "./ArticleComments/ArticleComments";

//styled


const ArticleWrap = styled.div`
  
`;

const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleBody = styled.div`
  
`;

const Article = (props) => {
    const {article, isOpenArticle, isOpenComments, onToggleArticleText, onToggleComments, id} = props;
    return (
        <ArticleWrap>
            <ArticleHeader>
                <ArticleTitle title={article.title}/>
                <ShowHide
                    id={id}
                    isOpen={isOpenArticle}
                    blockName={"article"}
                    onToggle={onToggleArticleText}
                />
            </ArticleHeader>
            {(isOpenArticle || Article.defaultProps.isOpenArticle) && <ArticleBody>
                <ArticleDate date={article.date}/>
                <ArticleText text={article.text}/>
                <ArticleComments
                    id={id}
                    isOpenComments={isOpenComments}
                    comments={article.comments}
                    onToggleComments={onToggleComments}
                />
            </ArticleBody>}
        </ArticleWrap>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
    isOpenArticle: PropTypes.bool
};

Article.defaultProps = {
    isOpenArticle: false
};

export default Article;