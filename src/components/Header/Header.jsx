import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { useAuth } from "../../context/ContextAuth";

const activeClass =
  (className) =>
  ({ isActive }) =>
    isActive ? className + " active" : className;

const Header = () => {
  const { isAuth, user } = useAuth();
  console.log(isAuth, user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="">
          <i className="feather-zap text-success display2-size me-3 ms-0"></i>
          <span className="d-inline-block text-primary fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
            Ecotria
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isAuth ? (
              <NavDropdown
                title={
                  <img
                    src="https://avatars.dicebear.com/api/bottts/:sean.svg"
                    alt="user"
                    className="w40 mt--1 p-0 ms-3 menu-icon"
                  />
                }
                align="left"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={NavLink} to="/auth/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
