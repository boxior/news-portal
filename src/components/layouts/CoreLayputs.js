import React from "react";
import {Switch, Route} from "react-router-dom"
import Articles from "../Articles/Articles";
import SignInContainer from "../Auth/SignIn/SignInContainer";
import SignUpContainer from "../Auth/SignUp/SignUpContainer";
import AddBlock from "../AddBlock/AddBlock";
import ArticlePage from "../ArticlePage/ArticlePage";
import NoMatch from "../NoMatch";

export const pathHome = "/";
export const pathLogin = "/login";
export const pathRegister = "/register";
export const pathAddArticle = "/add-article";
export const pathArticle = "/article/:slug";

const CoreLayout = props => {
    return (
        <Switch>
            <Route path={pathHome} exact component={Articles}/>
            <Route path={pathLogin} component={SignInContainer}/>
            <Route path={pathRegister} component={SignUpContainer}/>
            <Route path={pathAddArticle} component={AddBlock}/>
            <Route path={pathArticle} component={ArticlePage}/>
            <Route component={NoMatch}/>
        </Switch>
    );
};

export default CoreLayout;
