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
        isOpenArticle: bool,
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

    onResizeInit = () => {
        const {maxHeightAll, maxHeightLess, characterAll, characterLess} = this;
        this.props.isOpenArticle
            ?
            this.shaveInit(maxHeightAll, characterAll)
            :
            this.shaveInit(maxHeightLess, characterLess)
    };

    componentDidMount() {
        this.element = ReactDOM.findDOMNode(this.text); // get node element
        this.maxHeightLess = lineHeight(this.element) * 2 + 1; // height for 2 lines, add +1 px because do not work for real line-height)

        const {maxHeightLess, characterLess, shaveInit, onResizeInit} = this;

        shaveInit(maxHeightLess, characterLess);

        window.addEventListener("resize", onResizeInit);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeInit);
    };

    componentWillReceiveProps(nextProps) {
        const {isOpenArticle} = this.props;
        const {maxHeightLess, maxHeightAll, characterAll, characterLess, shaveInit, onResizeInit} = this;

        if (isOpenArticle !== nextProps.isOpenArticle) {
            return nextProps.isOpenArticle
                ?
                (window.removeEventListener("resize", onResizeInit), // remove before implement
                    shaveInit(maxHeightAll, characterAll),
                    window.addEventListener("resize", onResizeInit))
                :
                (window.removeEventListener("resize", onResizeInit), // remove before implement
                    shaveInit(maxHeightLess, characterLess),
                    window.addEventListener("resize", onResizeInit))
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