import React, { useContext } from "react";
import themeContext from "../contexts/themeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      className="flex justify-between px-10 h-20 shadow-lg items-center"
      id={theme ? "dark-primary" : null}
    >
      <p>Where in the world?</p>

      <p style={{ cursor: "pointer" }} onClick={toggleTheme}>
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
