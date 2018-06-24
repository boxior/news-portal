import React, {Component} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import uuidv1 from "uuid/v1";
import moment from "moment"
import {addArticle} from "../../reducers/articles";

//styled

const AddBlockWrap = styled.div`
`;

const mapStateToProps = state => ({
    articles: state.getIn(["articles", "articles"]),
});

const mapDispatchToProps = dispatch => ({
    addArticle: article => dispatch(addArticle(article))
});

class AddBlock extends Component {

    static propTypes = {
        addArticle: func
    };

    static defaultProps = {};

    state = {
        title: "",
        text: ""
    };

    AddArticle = (e) => {
        e.preventDefault();

        const {title, text} = this.state;
        const {addArticle} = this.props;

        const newArticle = {
            id: uuidv1(),
            date: moment(new Date()).format('LLLL'),
            title: title,
            text: text
        };

        if(title) {
            addArticle(newArticle);
            this.setState({title: "", text: ""});
        }
    };

    onChangeInput = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        this.setState({
            [name]: value
        });
    };

    render() {
        const {AddArticle, onChangeInput} = this;
        const {title, text} = this.state;

        return (
            <AddBlockWrap>
                <form action="">
                    <TextField
                        name={`title`}
                        label={`Enter article title`}
                        value={title}
                        onChange={onChangeInput}
                        fullWidth
                        margin={`normal`}
                        required
                    />
                    <TextField
                        name={`text`}
                        label={`Enter article text`}
                        value={text}
                        onChange={onChangeInput}
                        multiline={true}
                        rows={`3`}
                        fullWidth
                        margin={`normal`}
                    />
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        onClick={AddArticle}
                        type={`submit`}
                    >
                        Add article
                    </Button>
                </form>
            </AddBlockWrap>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlock);