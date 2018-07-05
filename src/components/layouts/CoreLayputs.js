import React from "react";
import {Switch, Route} from "react-router-dom"
import Articles from "../Articles/Articles";
import SignInContainer from "../Auth/SignIn/SignInContainer";
import SignUpContainer from "../Auth/SignUp/SignUpContainer";
import AddBlock from "../AddBlock/AddBlock";
import ArticlePage from "../ArticlePage/ArticlePage";
import NoMatch from "../NoMatch";

const CoreLayout = props => {
    return (
        <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/login" component={SignInContainer} />
            <Route path="/register" component={SignUpContainer} />
            <Route path="/add-article" component={AddBlock} />
            <Route path="/article/:slug" component={ArticlePage} />
            <Route component={NoMatch} />
        </Switch>
    );
};

export default CoreLayout;
