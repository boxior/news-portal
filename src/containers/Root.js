import React, {Component} from "react";
import {object, array, string, bool, func} from "prop-types";
import App from "./App"
import {Provider} from "react-redux"
import store from "../store/createStore";

export default class Root extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        return (
            <Provider store={store}>
                <App

                />
            </Provider>
        );
    };
};