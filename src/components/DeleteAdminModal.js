import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios, * as others from 'axios';

export default function DeleteAdminModal(props) {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        try {
            axios.delete(process.env.REACT_APP_WEBAPI + `News/${props.item.id}`);

            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button variant="danger" size="sm" onClick={handleClick}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClick} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClick}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmitForm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}