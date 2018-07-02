import React from "react";
import styled from "styled-components";
import {string} from "prop-types";
import RemoveComment from "./RemoveComment";

const ArticleCommentsCommentWrap = styled.p`
    padding-left: 25px;
    font-style: italic;
`;

const ArticleCommentsComment = (props) => {
    const {comment, comment_id, removeCommentApi} = props;

    return (
        <ArticleCommentsCommentWrap>
            {comment}
            <RemoveComment
                removeCommentApi={removeCommentApi}
                comment_id={comment_id}
            />
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