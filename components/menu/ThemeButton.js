/* import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    
      <Form className="d-flex">
        {theme === "dark" ? (
          <Button variant="outline-light" onClick={() => setTheme("light")}>
            <FontAwesomeIcon icon={faSun} />
          </Button>
        ) : (
          <Button variant="outline-dark" onClick={() => setTheme("dark")}>
            <FontAwesomeIcon icon={faMoon} />
          </Button>
        )}
      </Form>
  );
}

export default ThemeButton;
 */