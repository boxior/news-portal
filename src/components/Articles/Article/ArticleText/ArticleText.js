import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArticleTextWrap = styled.div`
    
`;

const ArticleText = (props) => {
    const {text} = props;

    return (
        <ArticleTextWrap>
            {text || ArticleText.defaultProps.text}
        </ArticleTextWrap>
    );
};

ArticleText.propTypes = {
    text: PropTypes.string
};

ArticleText.defaultProps = {
    text: "...some text"
};

export default ArticleText;