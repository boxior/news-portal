import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const ArticleCommentsTitleWrap = styled.i`
    
`;

const ArticleCommentsTitle = (props) => {
    const {title} = props;

    return (
        <ArticleCommentsTitleWrap>
            {title}
        </ArticleCommentsTitleWrap>
    );
};

ArticleCommentsTitle.propTypes = {
    title: string
};

ArticleCommentsTitle.defaultProps = {
    title: "Default title"
};

export default ArticleCommentsTitle;