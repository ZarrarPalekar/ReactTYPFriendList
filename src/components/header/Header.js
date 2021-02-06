import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar id="home" expand="lg" variant="dark" className="nav-class">
      <Navbar.Brand href="#home">
        <h1 className="font-weight-bold header-brand">Zarrar's Friend List</h1>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
