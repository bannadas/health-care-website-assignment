import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

const NavigationBar = () => {
  return (
    <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Medical</Navbar.Brand>
                {/* https://www.freepik.com/premium-vector/logo-homecare-suitable-health-protection-companies_19528195.htm#page=1&query=urology&position=14&from_view=search */}
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    
                    <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                    {/* {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>
);
};

export default NavigationBar;