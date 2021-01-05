import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const PublicNavbar = () => {
    return (
    <Navbar bg="success" expand="lg">
        <Navbar.Brand href="#home" className="text-white">Rock Paper Scissors</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default PublicNavbar
