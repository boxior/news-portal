import React from "react";
import {Switch, Route} from "react-router-dom"
import Articles from "../Articles/Articles";
import SignInContainer from "../Auth/SignIn/SignInContainer";
import SignUpContainer from "../Auth/SignUp/SignUpContainer";
import AddArticle from "../AddArticle/AddArticle";
import ArticlePage from "../ArticlePage/ArticlePage";
import NoMatch from "../NoMatch";
import EditArticle from "../EditArticle/EditArticle";
import Header from "../Header/Header"
import Loadable from "react-loadable"

export const pathHome = "/";
export const pathLogin = "/login";
export const pathRegister = "/register";
export const pathAddArticle = "/add-article";
export const pathArticle = "/article/:slug";
export const pathEditArticle = "/edit-article/:slug";

const Loading = props => {
    if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
};

const ArticlesLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "ArticlesChunk"*/ "../Articles/Articles"),
    loading: Loading,
    modules: ['ArticlesChunk'],
    // webpack: () => [require.resolveWeak('../Articles/Articles')],
});

const SignInContainerLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "SignInContainerChunk"*/ "../Auth/SignIn/SignInContainer"),
    loading: Loading,
    modules: ['SignInContainerChunk'],
    // webpack: () => [require.resolveWeak('../Auth/SignIn/SignInContainer')],
});

const SignUpContainerLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "SignUpContainerChunk"*/ "../Auth/SignUp/SignUpContainer"),
    loading: Loading,
    modules: ['SignUpContainerChunk'],
    // webpack: () => [require.resolveWeak('../Auth/SignUp/SignUpContainer')],
});

const AddArticleLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "AddArticleChunk"*/ "../AddArticle/AddArticle"),
    loading: Loading,
    modules: ['AddArticleChunk'],
    // webpack: () => [require.resolveWeak('../AddArticle/AddArticle')],
});

const ArticlePageLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "ArticlePageChunk"*/ "../ArticlePage/ArticlePage"),
    loading: Loading,
    modules: ['ArticlePageChunk'],
    // webpack: () => [require.resolveWeak('../ArticlePage/ArticlePage')],
});

const NoMatchLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "NoMatchChunk"*/ "../NoMatch"),
    loading: Loading,
    modules: ['NoMatchChunk'],
    // webpack: () => [require.resolveWeak('../NoMatch')],
});

const EditArticleLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "EditArticleChunk"*/ "../EditArticle/EditArticle"),
    loading: Loading,
    modules: ['EditArticleChunk'],
    // webpack: () => [require.resolveWeak('../EditArticle/EditArticle')],
});

const HeaderLoadable = Loadable({
    loader: () => import(/* webpackChunkName: "HeaderChunk"*/ "../Header/Header"),
    loading: Loading,
    modules: ['HeaderChunk'],
    // webpack: () => [require.resolveWeak('../Header/Header')],
});

const CoreLayout = props => {
    const {location} = props;

    return (
        <React.Fragment>
            <HeaderLoadable
                location={location}
            />
            <Switch>
                <Route
                    exact
                    path={pathHome}
                    component={ArticlesLoadable}/>
                <Route path={pathLogin} component={SignInContainerLoadable}/>
                <Route path={pathRegister} component={SignUpContainerLoadable}/>
                <Route path={pathAddArticle} component={AddArticleLoadable}/>
                <Route path={pathArticle} component={ArticlePageLoadable}/>
                <Route path={pathEditArticle} component={EditArticleLoadable}/>
                <Route component={NoMatchLoadable}/>
            </Switch>
        </React.Fragment>
    );
};

export default CoreLayout;
