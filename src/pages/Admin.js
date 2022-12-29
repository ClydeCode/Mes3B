import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import '../styles/admin.css';

export default function Admin() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="admin-nav">
                <Container>
                    <Navbar.Brand>Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/Admin/News">News</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Admin/Yearbook">Yearbook</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="danger">Log out</Button>
                    </Nav>
                </Container>
            </Navbar>
            <div className="px-5 py-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Button size="sm">Edit</Button>{' '}
                                <Button variant="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}