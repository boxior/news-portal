import React, {Component} from "react";
import styled from "styled-components";
import {object, array, string, bool, func} from "prop-types";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const AddCommentWrap = styled.div`
    display: flex;
    align-items: center;
`;

class AddComment extends Component {

    state = {
        comment: ""
    };

    onChange = e => {
        const value = e.currentTarget.value;

        this.setState({comment: value});
    };

    onSubmit = e => {
        const {addCommentApi, article_id} = this.props;
        const {comment} = this.state;
        e.preventDefault();

        const body = {
            article_id: article_id, // string, required
            comment: comment // string, required
        };

        addCommentApi(body);
        this.setState({comment: ""});
    };


    render() {
        const {comment} = this.state;
        const {onChange, onSubmit} = this;

        return (
            <AddCommentWrap>
                <form action=""
                    onSubmit={onSubmit}
                >
                    <TextField
                        name={`comment`}
                        value={comment}
                        onChange={onChange}
                    />
                    <Button
                        type={`submit`}
                        variant={`contained`}
                        style={{marginLeft: "15px"}}
                    >
                        Add comment
                    </Button>
                </form>

            </AddCommentWrap>
        );
    }

}
;

AddComment.propTypes = {};

AddComment.defaultProps = {};

export default AddComment;