// src/components/Navbar/NavBar.jsx
import React from "react";
import { Navbar, Nav, Form, Button, Container, Dropdown } from "react-bootstrap";
import { BiSearch, BiUser } from "react-icons/bi";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">🎬 My Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control type="search" placeholder="Quick search..." className="me-2" />
            <Button variant="outline-light">
              <BiSearch />
            </Button>
          </Form>

          <Dropdown align="end" className="ms-3">
            <Dropdown.Toggle variant="outline-light">
              <BiUser /> Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Manage Your Profile</Dropdown.Item>
              <Dropdown.Item>Build Your Account</Dropdown.Item>
              <Dropdown.Item>Change Password</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
