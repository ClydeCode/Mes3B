import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios, * as others from 'axios';

export default function EditAdminModal(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(props.item.title);
    const [description, setDescription] = useState(props.item.description)
    const [image, setImage] = useState(null);

    const handleClick = () => setShow(!show);

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        let config;
        let URL = process.env.REACT_APP_WEBAPI + `News/${props.item.id}/`;

        if (image !== null) {
            config = { headers: { 'Content-Type': 'multipart/form-data'} };
            URL += "withimage";
        }

        try {
            await axios.put(URL, {
               id: props.item.id,
               title: title,
               description: description,
               createdDate: props.item.createdDate,
               imagePath: props.item.imagePath,
               file: image
            }, config)

            window.location.reload();

        } catch (err) {
            console.log(err);
        }
        setImage(null);
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