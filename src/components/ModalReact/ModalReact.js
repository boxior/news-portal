import React from "react";
import styled from "styled-components";
import {func} from "prop-types";
import Modal from "react-modal"

const Message = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
`;

const Footer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;

const Accept = styled.button`
    padding: 5px 15px;
    font-size: 25px;
    color: red;
    border: none;
    background-color: transparent;
    
    &:hover {
        cursor: pointer;
    }
`;

const Cancel = styled(Accept)`
  
`;

Modal.setAppElement("#root");

const ModalReact = (props) => {
    const {isOpenModal, closeModal, children, labelModal, removeItem} = props;

    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
        >
            <Message>
                Are you sure to remove {labelModal}
            </Message>
            {children}
            <Footer>
                <Accept onClick={removeItem}>Accept</Accept>
                <Cancel onClick={closeModal}>Cancel</Cancel>
            </Footer>
        </Modal>
    );
};

ModalReact.propTypes = {
    closeModal: func
};

ModalReact.defaultProps = {};

export default ModalReact;