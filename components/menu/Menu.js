import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeButton from "./ThemeButton";
import dynamic from "next/dynamic";

function Menu() {
  const DynamicThemeButton = dynamic(() => import("./ThemeButton"), {
    ssr: false,
  });
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Navbar.Brand href="/">Exercicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <ThemeButton />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
