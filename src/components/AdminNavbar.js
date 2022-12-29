import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/adminNavbar.css';

export default function AdminNavbar() {
    return (
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
    )
}