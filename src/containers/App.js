import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import articles from "../resourses/articles";
import ToggleShowContext from "../components/ToggleShowContext/ToggleShowContext"
import {Provider} from "react-redux"
import store from "../store/createStore";
import AddBlock from "../components/AddBlock/AddBlock";

class App extends Component {

    state = {
        isShowRemoveButtons: true
    };

    toggleShowRemoveButtons = () => {
        this.setState(prev => {
            return {isShowRemoveButtons: !prev.isShowRemoveButtons}
        });
    };

    render() {
        const title = "News portal";
        const {toggleShowRemoveButtons} = this;
        const {isShowRemoveButtons} = this.state;

        return (
            <Provider store={store}>
                <ToggleShowContext.Provider
                    value={{
                        isShowRemoveButtons: isShowRemoveButtons,
                        toggleShowRemoveButtons: toggleShowRemoveButtons
                    }}
                >
                    <Header title={title}/>
                    <Articles/>
                    <AddBlock/>
                </ToggleShowContext.Provider>
            </Provider>
        )
    }
}

export default App;