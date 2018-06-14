import React from "react";
import styled from "styled-components";
import {string, bool} from "prop-types";
import shave from "shave";
import lineHeight from "line-height";
import ReactDOM from "react-dom";

const ArticleTextWrap = styled.span`
    
`;

class ArticleText extends React.Component {

    static propTypes = {
        text: string,
        isOpenArticle: bool
    };

    static defaultProps = {
        text: "...some text",
        isOpenArticle: false,
    };

    constructor(props) {
        super(props);

        this.characterAll = " ";
        this.characterLess = "...";
        this.maxHeightAll = 1; // property to shave module for show all text
    }

    shaveInit = (maxHeight, character) => {
        shave(this.element, maxHeight, {character: character});
    };

    onResize = (maxHeight, character) => (e) => {
        this.shaveInit(maxHeight, character);
    };

    onResizeInit = (maxHeight, character) => {
        window.addEventListener("resize", this.onResize(maxHeight, character));
    };

    componentDidMount() {
        this.element = ReactDOM.findDOMNode(this.text); // get node element
        this.maxHeightLess = lineHeight(this.element) * 2 + 1; // height for 2 lines, add +1 px because do not work for real line-height)

        const {maxHeightLess, characterLess, shaveInit, onResizeInit} = this;

        shaveInit(maxHeightLess, characterLess);
        onResizeInit(maxHeightLess, characterLess);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize());
    };

    componentWillReceiveProps(nextProps) {
        const {isOpenArticle} = this.props;
        const {maxHeightLess, maxHeightAll, characterAll, characterLess, shaveInit, onResizeInit} = this;

        if (isOpenArticle !== nextProps.isOpenArticle) {
            return nextProps.isOpenArticle
                ?
                (window.removeEventListener("resize", this.onResize()), // remove before implement
                    shaveInit(maxHeightAll, characterAll),
                    onResizeInit(maxHeightAll, characterAll))
                :
                (window.removeEventListener("resize", this.onResize()), // remove before implement
                    shaveInit(maxHeightLess, characterLess),
                    onResizeInit(maxHeightLess, characterLess))
        }
    };

    render() {
        const {text} = this.props;

        return (
            <ArticleTextWrap
                ref={node => {
                    this.text = node
                }}>
                {text}
            </ArticleTextWrap>
        )
    }
};

export default ArticleText;