import React, {Component} from "react";
import styled from "styled-components";
import {array, func} from "prop-types";
import ArticleCommentsTitle from "./ArticleCommentsTitle";
import ShowHide from "../../../../../ShowHide/ShowHide";
import ArticleCommentsComment from "./ArticleCommentsComment";
import Remove from "../../../../../Remove/Remove";
import ModalReact from "../../../../../ModalReact/ModalReact";
import ToggleShowContext from "../../../../../ToggleShowContext/ToggleShowContext"

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
        comments: array,
        openModal: func
    };

    state = {
        isOpenComments: false,
        isOpenModal: false,
        isRemoveItem: false,

    };

    openModal = () => (e) => {
        this.setState({
            isOpenModal: true,
        });
    };

    closeModal = () => {
        this.setState({isOpenModal: false});
    };

    removeItem = () => {
        this.setState({isRemoveItem: true});

        this.closeModal();
    };

    onToggleComments = () => {

        this.setState(prevState => {
            return {isOpenComments: !prevState.isOpenComments}
        });
    };

    render() {
        const {comments, id} = this.props;
        const {closeModal, removeItem, openModal} = this;
        const {isOpenModal, isRemoveItem} = this.state;

        const title = `Comments (${comments.length})`;
        const commentsLabel = "comments";

        return isRemoveItem ? null :
            (
                <ArticleCommentsWrap>
                    <ArticleCommentsHeader>
                        <ArticleCommentsTitle title={title}/>
                        <ShowHide
                            isOpen={this.state.isOpenComments}
                            blockName={commentsLabel}
                            onToggle={this.onToggleComments}
                        />
                        <ToggleShowContext.Consumer>
                            { ({isShowRemoveButtons}) =>
                                <Remove
                                    isShowRemoveButtons={isShowRemoveButtons}
                                    onClick={openModal(commentsLabel, id)}
                                    label={commentsLabel}
                                />
                            }
                        </ToggleShowContext.Consumer>
                    </ArticleCommentsHeader>
                    {this.state.isOpenComments && <ArticleCommentsBody>
                        {comments.map((row, index) =>
                            <ArticleCommentsComment
                                key={index}
                                comment={row.comment}
                            />
                        )}
                    </ArticleCommentsBody>}
                    <ModalReact
                        isOpenModal={isOpenModal}
                        closeModal={closeModal}
                        labelModal={commentsLabel}
                        removeItem={removeItem}
                    />
                </ArticleCommentsWrap>
            );
    }
};

export default ArticleComments;