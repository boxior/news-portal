import React, {Component} from "react";
import styled from "styled-components";
import {array, func, object, string} from "prop-types";
import ArticleCommentsTitle from "./ArticleCommentsTitle";
import ShowHide from "../../../../../ShowHide/ShowHide";
import ArticleCommentsComment from "./ArticleCommentsComment";
import Remove from "../../../../../Remove/Remove";
import ModalReact from "../../../../../ModalReact/ModalReact";
import {List} from "immutable"
import AddComment from "./AddComment";

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
        comments: object,
        openModal: func,
        removeCommentApi: func,
        article_id: string,
        articles: object
    };

    state = {
        isOpenComments: false,
        isOpenModal: false,
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
        const {article_id} = this.props;
        console.log("remove_articles");
        this.closeModal();
    };

    onToggleComments = () => {

        this.setState(prevState => {
            return {isOpenComments: !prevState.isOpenComments}
        });
    };

    render() {
        const {comments, article_id, addCommentApi, removeCommentApi, token} = this.props;
        const {closeModal, removeItem, openModal} = this;
        const {isOpenModal, isOpenComments} = this.state;

        const title = `Comments (${List.isList(comments) ? comments.size : 0})`;
        const commentsLabel = "comments";

        return !List.isList(comments) ? null :
            (
                <ArticleCommentsWrap>
                    <ArticleCommentsHeader>
                        <ArticleCommentsTitle title={title}/>
                        <ShowHide
                            isOpen={isOpenComments}
                            blockName={commentsLabel}
                            onToggle={this.onToggleComments}
                        />

                        {/*for now remove only one comment*/}
                        {/*<Remove*/}
                        {/*isShowRemoveButtons={(token && token !== "undefined")}*/}
                        {/*onClick={openModal(commentsLabel, article_id)}*/}
                        {/*label={commentsLabel}*/}
                        {/*/>*/}

                    </ArticleCommentsHeader>
                    {isOpenComments && <ArticleCommentsBody>
                        {List.isList(comments) ? comments.map((row, index) =>
                            <ArticleCommentsComment
                                key={index}
                                comment={row.get("comment")}
                                comment_id={row.get("id")}
                                removeCommentApi={removeCommentApi}
                                token={token}
                            />
                        ) : null}
                        {(token && token !== "undefined") ?
                            <AddComment
                                article_id={article_id}
                                addCommentApi={addCommentApi}
                            /> : null
                        }

                    </ArticleCommentsBody>}
                    {/*for now remove only one comment*/}
                    {/*<ModalReact*/}
                    {/*isOpenModal={isOpenModal}*/}
                    {/*closeModal={closeModal}*/}
                    {/*labelModal={commentsLabel}*/}
                    {/*removeItem={removeItem}*/}
                    {/*/>*/}
                </ArticleCommentsWrap>
            );
    }
};

export default ArticleComments;