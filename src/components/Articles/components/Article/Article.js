import React, {Component} from "react";
import styled from "styled-components";
import {object, string, func, bool} from "prop-types";
import ShowHide from "../../../ShowHide/ShowHide";
import ArticleDate from "./components/ArticleDate";
import ArticleText from "./components/ArticleText";
import ArticleTitle from "./components/ArticleTitle";
import ArticleComments from "./components/ArticleComments/ArticleComments";
import Remove from "../../../Remove/Remove";
import ModalReact from "../../../ModalReact/ModalReact";
import ToggleShowContext from "../../../ToggleShowContext/ToggleShowContext"

//styled


const ArticleWrap = styled.div`
  
`;

const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleBody = styled.div`
  
`;

class Article extends Component {

    static propTypes = {
        article: object.isRequired,
        id: string,
        openModal: func,
        isRemove: bool,
        actionIdArticle: string
    };

    state = {
        isOpenArticle: false,
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

    onToggleArticle = () => {

        this.setState(prevState => {
            return {isOpenArticle: !prevState.isOpenArticle}
        });
    };

    render() {
        const {article, id} = this.props;
        const {isOpenArticle, isRemoveItem, isOpenModal} = this.state;
        const {onToggleArticle, openModal, removeItem, closeModal} = this;
        const articleLabel = "article";

        return isRemoveItem ? null :
            (
                <ArticleWrap>
                    <ArticleHeader>
                        <ArticleTitle title={article.title}/>
                        <ShowHide
                            isOpenArticle={isOpenArticle}
                            blockName={articleLabel}
                            onToggle={onToggleArticle}
                        />
                        <ToggleShowContext.Consumer>
                            {({isShowRemoveButtons}) =>
                                <Remove
                                    isShowRemoveButtons={isShowRemoveButtons}
                                    onClick={openModal(articleLabel, id)}
                                    label={articleLabel}
                                />
                            }

                        </ToggleShowContext.Consumer>

                    </ArticleHeader>

                    <ArticleBody>
                        <ArticleDate date={article.date}/>
                        <ArticleText
                            text={article.text}
                            isOpenArticle={isOpenArticle}/>
                        {isOpenArticle &&
                        <ArticleComments
                            comments={article.comments}
                            id={id}
                        />}
                    </ArticleBody>
                    <ModalReact
                        isOpenModal={isOpenModal}
                        closeModal={closeModal}
                        labelModal={articleLabel}
                        removeItem={removeItem}
                    />
                </ArticleWrap>
            );
    }
};

export default Article;