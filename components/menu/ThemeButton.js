import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ThemeButton() {
    const [theme, setTheme] = useState("light");
    const [isMounted, setIsMounted] = useState(false); // To check if component is mounted

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        if (isMounted) {
            document.documentElement.setAttribute("data-bs-theme", theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, isMounted]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme); // Update the theme state
    };

    if (!isMounted) return null; // Prevent rendering on the server side

    return (
        <Button variant="link" onClick={toggleTheme}>
            {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} title="Switch to light mode" />
            ) : (
                <FontAwesomeIcon icon={faMoon} title="Switch to dark mode" />
            )}
        </Button>
    );
}

export default ThemeButton;
