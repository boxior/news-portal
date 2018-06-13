import React from "react";
import styled from "styled-components";
import {string, bool} from "prop-types";
import shave from "shave";

const ArticleTextWrap = styled.span`
    
`;

class ArticleText extends React.Component {

    static propTypes = {
        text: string,
        isShowAll: bool
    };

    static defaultProps = {
        text: "...some text",
        isShowAll: false,
    };

    constructor(props) {
        super(props);

        this.maxHeightAll = 1;
        this.maxHeightLess = 36;
        this.characterAll = " ";
        this.characterLess = "...";

        this.state = {
            maxHeight: !props.isShowAll ? this.maxHeightLess : this.maxHeightAll
        };
    }



    shaveInit = (maxHeight, character) => {
        shave("span", maxHeight, {className: this.text.state.generatedClassName, character: character});
    };

    onResize = (maxHeight, character) => (e) => {
        this.shaveInit(maxHeight, character);
    };

    onResizeInit = (maxHeight, character) => {
        window.addEventListener("resize", this.onResize(maxHeight, character));
    };

    componentDidMount() {
        const {maxHeight} = this.state;
        const {characterLess, shaveInit, onResizeInit} = this;

        shaveInit(maxHeight, characterLess);
        onResizeInit(maxHeight, characterLess);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    };

    componentWillReceiveProps(nextProps) {
        const {isShowAll} = this.props;
        const {maxHeightAll, maxHeightLess, characterAll, characterLess, shaveInit, onResizeInit} = this;

        if (isShowAll !== nextProps.isShowAll) {
            return nextProps.isShowAll
                ?
                (shaveInit(maxHeightAll, characterAll),
                    onResizeInit(maxHeightAll, characterAll))
                :
                (shaveInit(maxHeightLess, characterLess),
                    onResizeInit(maxHeightLess, characterLess))
        }

    };

    render() {
        const {text} = this.props;

        return (
            <ArticleTextWrap ref={node => {
                this.text = node
            }}>
                {text}
            </ArticleTextWrap>
        );
    }

};

export default ArticleText;