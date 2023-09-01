import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useGetCurrentTheme from "../../hooks/useGetCurrentTheme";
import { Button } from "react-bootstrap";

function ThemeButton() {
  // If there is no theme set, the theme will be light
  const [theme, setTheme] = useState(useGetCurrentTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("toggleTheme");
  };

  return (
    <>
      {theme === "dark" ? (
        <Button variant="" onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faSun} />
        </Button>
      ) : (
        <Button variant="" onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      )}
    </>
  );
}

export default ThemeButton;