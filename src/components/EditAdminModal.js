import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function EditAdminModal(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(props.data.title);
    const [description, setDescription] = useState(props.data.description)

    const handleClick = () => setShow(!show);

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            await fetch(process.env.REACT_APP_WEBAPI + `News/${props.data.id}`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    id: props.data.id,
                    title: title,
                    description: description,
                    imagePath: props.data.imagePath,
                    createdDate: props.data.createdDate
                }),
            });

            window.location.reload();

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleClick}>
                Edit
            </Button> {" "}

            <Modal show={show} onHide={handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="input"
                                defaultValue={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClick}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitForm}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}