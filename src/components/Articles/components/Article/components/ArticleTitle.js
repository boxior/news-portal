import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const ArticleTitleWrap = styled.h2`
    
`;

const ArticleTitle = (props) => {
    const {title} = props;

    return (
        <ArticleTitleWrap>
            {title}
        </ArticleTitleWrap>
    );
};

ArticleTitle.propTypes = {
    title: string
};

ArticleTitle.defaultProps = {
    title: "Article Title"
};

export default ArticleTitle;