import React from "react";
import styled from "styled-components";
import {string} from "prop-types";
import moment from "moment";

const ArticleDateWrap = styled.i`
    display: block;
    padding-bottom: 10px;
`;

const ArticleDate = (props) => {
    const {date} = props;

    return (
        <ArticleDateWrap>
            {date !== ArticleDate.defaultProps.date ? moment(date).format('LLLL') : ArticleDate.defaultProps.date}
        </ArticleDateWrap>
    );
};

ArticleDate.propTypes = {
    date: string
};

ArticleDate.defaultProps = {
    date: "no date"
};

export default ArticleDate;