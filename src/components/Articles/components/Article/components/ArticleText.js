import React from "react";
import styled from "styled-components";
import {string} from "prop-types";
import shave from "shave";

const ArticleTextWrap = styled.span`
    
`;

class ArticleText extends React.Component {

    static propTypes = {
        text: string
    };

    static defaultProps = {
        text: "...some text"
    };

    shaveInit = () => {
        shave("span", 36, {className: this.text.state.generatedClassName});
    };

    onResize = () => {
        this.shaveInit();
    };

    onResizeInit = () => {
        window.addEventListener("resize", this.onResize);
    };

    componentDidMount() {
        this.shaveInit();
        this.onResizeInit();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    };

    render() {
        const {text} = this.props;

        return (
            <ArticleTextWrap ref={node => {this.text = node}}>
                {text}
            </ArticleTextWrap>
        );
    }

};

export default ArticleText;