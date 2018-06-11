import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const ArticleTextWrap = styled.div`
    
`;

const ArticleText = (props) => {
    const {text} = props;

    return (
        <ArticleTextWrap>
            {text}
        </ArticleTextWrap>
    );
};

ArticleText.propTypes = {
    text: string
};

ArticleText.defaultProps = {
    text: "...some text"
};

export default ArticleText;