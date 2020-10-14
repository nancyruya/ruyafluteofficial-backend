import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Navigationbar = () => {
  
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <Image
          className="logo"
          src={require("../ruyaflute.JPG")}
          roundedCircle
        />{" "}
        RuyaFlute
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Journey">My Journey</Nav.Link>
          <Nav.Link href="/#Pokeme">Poke Me</Nav.Link>
          <Nav.Link href="/workwithme">Work With Me</Nav.Link>
          <NavDropdown title="Contemplation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="/Healthcare">Healthcare</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
