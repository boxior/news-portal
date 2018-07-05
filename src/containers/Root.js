import React, {Component} from "react";
import {object, array, string, bool, func} from "prop-types";
import {Provider} from "react-redux"
import store from "../store/createStore";
import App from "./App"

export default class Root extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    };
};