import React from "react";
import styled from "styled-components";
import {array, func, string, bool} from "prop-types";
import Article from "./components/Article/Article";

const ArticlesWrap = styled.div`
    
`;

const Articles = (props) => {
    const {articles, openModal, actionIdArticle, isRemove} = props;

    return (
        <ArticlesWrap>
            {articles.map(row =>
                <Article
                    key={row.id}
                    id={row.id}
                    article={row}
                    openModal={openModal}
                    actionIdArticle={actionIdArticle}
                    isRemove={isRemove}
                />
            )}
        </ArticlesWrap>
    );
};

export default Articles;

Articles.propTypes = {
    articles: array.isRequired,
    openModal: func,
    actionIdArticle: string,
    isRemove: bool
};
