import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const ArticleCommentsCommentWrap = styled.p`
    padding-left: 25px;
    font-style: italic;
`;

const ArticleCommentsComment = (props) => {
    const {comment} = props;

    return (
        <ArticleCommentsCommentWrap>
            {comment}
        </ArticleCommentsCommentWrap>
    );
};

ArticleCommentsComment.propTypes = {
    comment: string
};

ArticleCommentsComment.defaultProps = {
    comment: "...comment"
};

export default ArticleCommentsComment;