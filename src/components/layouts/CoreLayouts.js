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
    loader: () => import("../Articles/Articles"),
    loading: Loading
});

const SignInContainerLoadable = Loadable({
    loader: () => import("../Auth/SignIn/SignInContainer"),
    loading: Loading
});

const SignUpContainerLoadable = Loadable({
    loader: () => import("../Auth/SignUp/SignUpContainer"),
    loading: Loading
});

const AddArticleLoadable = Loadable({
    loader: () => import("../AddArticle/AddArticle"),
    loading: Loading
});

const ArticlePageLoadable = Loadable({
    loader: () => import("../ArticlePage/ArticlePage"),
    loading: Loading
});

const NoMatchLoadable = Loadable({
    loader: () => import("../NoMatch"),
    loading: Loading
});

const EditArticleLoadable = Loadable({
    loader: () => import("../EditArticle/EditArticle"),
    loading: Loading
});

const HeaderLoadable = Loadable({
    loader: () => import("../Header/Header"),
    loading: Loading
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
