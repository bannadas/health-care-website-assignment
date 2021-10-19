
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';




const NavigationBar = () => {
    const {user,logOut} = useAuth();
  return (
    <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
               
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    
                    
                    <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                    <Nav.Link as={HashLink} to="/doctordetails">Doctor Details</Nav.Link>
                   
                    {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} Logged in with Email id:{user.email} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                     
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    </>
);
};

export default NavigationBar;