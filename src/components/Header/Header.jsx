import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { useAuth } from "../../context/ContextAuth";

const Header = () => {
  const { isAuth, logOut } = useAuth();
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
              <NavDropdown title="Perfil" align="left">
                <NavDropdown.Item as={NavLink} to="/user/perfil">
                  Perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/user/ajustes">
                  Ajustes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    logOut();
                  }}
                >
                  Cerrar Sesión
                </NavDropdown.Item>
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
