import React from "react";
import {Switch, Route} from "react-router-dom"
import Articles from "../Articles/Articles";
import SignInContainer from "../Auth/SignIn/SignInContainer";
import SignUpContainer from "../Auth/SignUp/SignUpContainer";
import AddBlock from "../AddArticle/AddArticle";
import ArticlePage from "../ArticlePage/ArticlePage";
import NoMatch from "../NoMatch";
import EditArticle from "../EditArticle/EditArticle";
import Header from "../Header/Header"

export const pathHome = "/";
export const pathLogin = "/login";
export const pathRegister = "/register";
export const pathAddArticle = "/add-article";
export const pathArticle = "/article/:slug";
export const pathEditArticle = "/edit-article/:slug";

const CoreLayout = props => {
    const {location} = props;
    console.log("props, corelayout", props);
    return (
        <React.Fragment>
            <Header
                location={location}
                {...props}
            />
            <Switch>
                <Route path={pathHome} exact component={Articles}/>
                <Route path={pathLogin} component={SignInContainer}/>
                <Route path={pathRegister} component={SignUpContainer}/>
                <Route path={pathAddArticle} component={AddBlock}/>
                <Route path={pathArticle} component={ArticlePage}/>
                <Route path={pathEditArticle} component={EditArticle}/>
                <Route component={NoMatch}/>
            </Switch>
        </React.Fragment>
    );
};

export default CoreLayout;
