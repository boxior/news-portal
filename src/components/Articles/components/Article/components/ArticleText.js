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
            maxHeight: !this.props.isShowAll ? this.maxHeightLess : this.maxHeightAll
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
        this.shaveInit(this.state.maxHeight, this.characterLess);
        this.onResizeInit(this.state.maxHeight, this.characterLess);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    };

    componentWillReceiveProps(nextProps) {
        const {maxHeightAll, maxHeightLess} = this;

        if (this.props.isShowAll !== nextProps.isShowAll) {
            return nextProps.isShowAll
                ?
                (this.shaveInit(maxHeightAll, this.characterAll),
                    this.onResizeInit(maxHeightAll, this.characterAll))
                :
                (this.shaveInit(maxHeightLess),
                    this.onResizeInit(maxHeightLess))
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