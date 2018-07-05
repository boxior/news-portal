import React, {Component} from "react";
import styled from "styled-components";
import {object, string, func, bool, array} from "prop-types";
import ShowHide from "../../../ShowHide/ShowHide";
import ArticleDate from "./components/ArticleDate";
import ArticleText from "./components/ArticleText";
import ArticleComments from "./components/ArticleComments/ArticleComments";
import Remove from "../../../Remove/Remove";
import ModalReact from "../../../ModalReact/ModalReact";
import ToggleShowContext from "../../../ToggleShowContext/ToggleShowContext"
import {Link} from "react-router-dom"

//styled


const ArticleWrap = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid grey;
`;

const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleBody = styled.div`
  
`;

const ArticleTitle = styled.h2`
  
`;

class Article extends Component {

    static propTypes = {
        article: object.isRequired,
        article_id: string,
        openModal: func,
        actionIdArticle: string,
        removeArticle: func,
    };

    state = {
        isOpenArticle: false,
        isOpenModal: false
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
        const {removeArticleApi, article} = this.props;

        removeArticleApi(article.get("slug"));

        this.closeModal();
    };

    onToggleArticle = () => {

        this.setState(prevState => {
            return {isOpenArticle: !prevState.isOpenArticle}
        });
    };

    render() {
        const {article, article_id, removeCommentApi, articles, addCommentApi} = this.props;
        const {isOpenArticle, isOpenModal} = this.state;
        const {onToggleArticle, openModal, removeItem, closeModal} = this;
        const articleLabel = "article";

        return (
                <ArticleWrap>
                    <ArticleHeader>
                        <Link to={`/article/${article.get("slug")}`}><ArticleTitle>{article.get("title")}</ArticleTitle></Link>
                        <ShowHide
                            isOpen={isOpenArticle}
                            blockName={articleLabel}
                            onToggle={onToggleArticle}
                        />
                        <ToggleShowContext.Consumer>
                            {({isShowRemoveButtons}) =>
                                <Remove
                                    isShowRemoveButtons={isShowRemoveButtons}
                                    onClick={openModal(articleLabel, article_id)}
                                    label={articleLabel}
                                />
                            }

                        </ToggleShowContext.Consumer>

                    </ArticleHeader>

                    <ArticleBody>
                        <ArticleDate date={article.get("createAt")}/>
                        <ArticleText
                            text={article.get("text")}
                            isOpenArticle={isOpenArticle}/>
                        {isOpenArticle &&
                        <ArticleComments
                            comments={article.get("comments")}
                            removeCommentApi={removeCommentApi}
                            articles={articles}
                            article_id={article_id}
                            addCommentApi={addCommentApi}
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