import React, {Component} from "react";
import styled from "styled-components";
import {array} from "prop-types";
import ArticleCommentsTitle from "./ArticleCommentsTitle";
import ShowHide from "../../../../../ShowHide/ShowHide";
import ArticleCommentsComment from "./ArticleCommentsComment";

//styled

const ArticleCommentsWrap = styled.div`
  
`;

const ArticleCommentsHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`;

const ArticleCommentsBody = styled.div`
  
`;

class ArticleComments extends Component {

    static propTypes = {
        comments: array.isRequired,
    };

    state = {
        isOpenComments: false
    };

    onToggleComments = () => {

        this.setState( prevState => {
            return {isOpenComments: !prevState.isOpenComments}
        });
    };

    render() {
        const {comments} = this.props;
        const title = `Comments (${comments.length})`;

        return (
            <ArticleCommentsWrap>
                <ArticleCommentsHeader>
                    <ArticleCommentsTitle title={title}/>
                    <ShowHide
                        isOpen={this.state.isOpenComments}
                        blockName={`comments`}
                        onToggle={this.onToggleComments}
                    />
                </ArticleCommentsHeader>
                {this.state.isOpenComments && <ArticleCommentsBody>
                    {comments.map((row, index) =>
                        <ArticleCommentsComment
                            key={index}
                            comment={row.comment}
                        />
                    )}
                </ArticleCommentsBody>}
            </ArticleCommentsWrap>
        );
    }
};

export default ArticleComments;