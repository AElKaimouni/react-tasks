import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = ({ userName, onPreferencesClick }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Personal Assistant App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto display-flex w-100">
          <Nav.Link disabled style={{ flexGrow: 1 }}>{`Welcome, ${userName}`}</Nav.Link>
          <Button variant="outline-primary">
            <Link to="/prefernces">Preferences</Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
