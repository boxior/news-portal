import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArticleTitleWrap = styled.h2`
    
`;

const ArticleTitle = (props) => {
    const {title} = props;

    return (
        <ArticleTitleWrap>
            {title || ArticleTitle.defaultProps.title}
        </ArticleTitleWrap>
    );
};

ArticleTitle.propTypes = {
    title: PropTypes.string
};

ArticleTitle.defaultProps = {
    title: "Article Title"
};

export default ArticleTitle;