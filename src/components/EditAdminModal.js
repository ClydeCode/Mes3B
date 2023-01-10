import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios, * as others from 'axios';

export default function EditAdminModal(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(props.data.title);
    const [description, setDescription] = useState(props.data.description)
    const [image, setImage] = useState();

    const handleClick = () => setShow(!show);

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            await axios.put(process.env.REACT_APP_WEBAPI + `News/${props.data.id}`, {
               id: props.data.id,
               title: title,
               description: description,
               createdDate: props.data.createdDate,
               file: image
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

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
                                onChange={(e) => setImage(e.target.files[0])}
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