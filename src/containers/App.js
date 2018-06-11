import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import articles from "../resourses/articles";

class App extends Component {

    render() {
        const title = "News portal";

        return (
            <div>
                <Header title={title} />
                <Articles articles={articles} />
            </div>
        )
    }
}

export default App;
