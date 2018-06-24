import React, {Component} from "react";
import styled from "styled-components";
import {object, string, func, bool, array} from "prop-types";
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
        actionIdArticle: string,
        removeArticle: func,
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
        const {removeArticle, articles, id} = this.props;

        let newArticles = articles.filter( row => row.get("id") !== id);

        removeArticle(newArticles);
        this.closeModal();
    };

    onToggleArticle = () => {

        this.setState(prevState => {
            return {isOpenArticle: !prevState.isOpenArticle}
        });
    };

    render() {
        const {article, id, removeComments, articles} = this.props;
        const {isOpenArticle, isRemoveItem, isOpenModal} = this.state;
        const {onToggleArticle, openModal, removeItem, closeModal} = this;
        const articleLabel = "article";

        return isRemoveItem ? null :
            (
                <ArticleWrap>
                    <ArticleHeader>
                        <ArticleTitle title={article.get("title")}/>
                        <ShowHide
                            isOpen={isOpenArticle}
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
                        <ArticleDate date={article.get("date")}/>
                        <ArticleText
                            text={article.get("text")}
                            isOpenArticle={isOpenArticle}/>
                        {isOpenArticle &&
                        <ArticleComments
                            comments={article.get("comments")}
                            removeComments={removeComments}
                            articles={articles}
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