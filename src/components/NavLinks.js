import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
//todo: Make the links here toggle between displays in the 'pages' folder
export default function NavLinks(){
    return (
        <Navbar>
            <Container fluid>   
            <Nav>
                <Nav.Link as={Link} to='/'>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to='/bios'>
                    About Me
                </Nav.Link>
                <Nav.Link as={Link} to='/projects'>
                    Created Projects
                </Nav.Link>
                <Nav.Link as={Link} to='/contacts'>
                    My Contacts
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}