import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArticleCommentsTitle from "./ArticleCommentsTitle/ArticleCommentsTitle";
import ShowHide from "../../../ShowHide/ShowHide";
import ArticleCommentsComment from "./ArticleCommentsComment/ArticleCommentsComment";

//styled

const ArticleCommentsWrap = styled.div`
  
`;

const ArticleCommentsHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`;

const ArticleCommentsBody = styled.div`
  
`;

const ArticleComments = (props) => {
    const {comments, isOpenComments, onToggleComments, id} = props;
    const title = `Comments (${comments.length})`;

    return (
        <ArticleCommentsWrap>
            <ArticleCommentsHeader>
                <ArticleCommentsTitle title={title}/>
                <ShowHide
                    id={id}
                    isOpen={isOpenComments}
                    blockName={`comments`}
                    onToggle={onToggleComments}
                />
            </ArticleCommentsHeader>
            {isOpenComments && <ArticleCommentsBody>
                {comments.map( (row, index) => <ArticleCommentsComment
                    key={index}
                    comment={row.comment}
                    />
                )}
            </ArticleCommentsBody>}
        </ArticleCommentsWrap>
    );
};

ArticleComments.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpenComments: PropTypes.bool
};

ArticleComments.defaultProps = {
    isOpenComments: false
};

export default ArticleComments;