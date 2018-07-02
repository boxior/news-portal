import React from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import Button from "@material-ui/core/Button"

const RemoveCommentWrap = styled.div`
    
`;

const RemoveComment = (props) => {
    const {removeCommentApi, comment_id} = props;

    const removeComment = e => {
        removeCommentApi(comment_id)
    };

    return (
        <Button
            variant={`contained`}
            color={`secondary`}
            style={{marginLeft: "15px"}}
            onClick={removeComment}
        >
            Remove Comment
        </Button>
    );
};

RemoveComment.propTypes = {};

RemoveComment.defaultProps = {};

export default RemoveComment;