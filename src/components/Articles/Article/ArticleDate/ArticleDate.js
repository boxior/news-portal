import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";

const ArticleDateWrap = styled.i`
    display: block;
    padding-bottom: 10px;
`;

const ArticleDate = (props) => {
    const {date} = props;
    console.log(date);
    return (
        <ArticleDateWrap>
            {date !== ArticleDate.defaultProps.date ? moment(date).format('LLLL') : ArticleDate.defaultProps.date}
        </ArticleDateWrap>
    );
};

ArticleDate.propTypes = {
    date: PropTypes.string
};

ArticleDate.defaultProps = {
    date: "no date"
};

export default ArticleDate;