import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import dynamic from "next/dynamic";

const DynamicThemeButton = dynamic(() => import("./ThemeButton"), {
    ssr: false,  // Disables SSR for ThemeButton
});

function Menu() {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Navbar.Brand href="/">Exercicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <Nav.Link href="/kanban-board">Kanban</Nav.Link>
                    <Nav.Link href="/kanban">Kanban Board</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <DynamicThemeButton /> {/* Dynamically imported theme button */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
