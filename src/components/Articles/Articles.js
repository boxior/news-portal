import React from "react";
import styled from "styled-components";
import {array} from "prop-types";
import Article from "./components/Article/Article";

const ArticlesWrap = styled.div`
    
`;

const Articles = (props) => {
    const {articles} = props;

    return (
        <ArticlesWrap>
            {articles.map(row =>
                <Article
                    key={row.id}
                    article={row}
                />
            )}
        </ArticlesWrap>
    );
};

export default Articles;

Articles.propTypes = {
    articles: array.isRequired
};
