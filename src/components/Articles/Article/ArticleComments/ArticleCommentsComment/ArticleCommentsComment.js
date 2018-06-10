import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
    comment: PropTypes.string
};

ArticleCommentsComment.defaultProps = {
    comment: "...comment"
};

export default ArticleCommentsComment;