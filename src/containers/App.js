import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import articles from "../resourses/articles";
import ToggleShowContext from "../components/ToggleShowContext/ToggleShowContext"

class App extends Component {

    state = {
        isShowRemoveButtons: true
    };

    toggleShowRemoveButtons = () => {
        this.setState( prev => {
            return {isShowRemoveButtons: !prev.isShowRemoveButtons}
        });
    };

    render() {
        const title = "News portal";
        const {toggleShowRemoveButtons} = this;
        const {isShowRemoveButtons} = this.state;

        return (
            <ToggleShowContext.Provider
                value={{
                    isShowRemoveButtons: isShowRemoveButtons,
                    toggleShowRemoveButtons: toggleShowRemoveButtons
                }}
            >
                <Header title={title}/>
                <Articles
                    articles={articles}
                />
            </ToggleShowContext.Provider>
        )
    }
}

export default App;
