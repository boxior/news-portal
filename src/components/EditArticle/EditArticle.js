import React, {Component} from "react";
import {connect} from "react-redux"
import {object, array, string, bool, func} from "prop-types";
import {pathLogin} from "../layouts/CoreLayouts";
import {getArticleApi, updateArticleApi} from "../../reducers/article";
import {getCookie} from "../../cookies";
import {Map} from "immutable"
import EditArticleForm from "./EditArticleForm";

//styled

const mapStateToProps = (state, props) => ({
    article: state.article.getIn(["article", "data", "0"]),
    token: state.auth.get("token"),
    slug: props.match.params.slug
});

const mapDispatchToProps = dispatch => ({
    updateArticleApi: (slug, body) =>
        dispatch(updateArticleApi(slug, body)),
    getArticleApi: slug =>
        dispatch(getArticleApi(slug))
});

class EditArticle extends Component {

    static propTypes = {
        addArticleApi: func,
    };

    componentDidMount() {
        const {slug, getArticleApi} = this.props;

        getArticleApi(slug);

        if (!getCookie("token") || getCookie("token") === "undefined") {
            this.props.history.push(pathLogin)
        }
    };

    componentWillReceiveProps(nextProps) {
        const {token} = this.props;

        if (nextProps.token !== token || (!token || token === "undefined")) {
            this.props.history.push(pathLogin)
        }
    }

    render() {
        const {article, updateArticleApi, slug} = this.props;

        return Map.isMap(article) ? (
            <EditArticleForm
                article={article}
                updateArticleApi={updateArticleApi}
                slug={slug}
            />
        ) : null;
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);