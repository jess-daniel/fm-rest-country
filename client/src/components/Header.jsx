import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="flex justify-between px-10 h-20 shadow-lg items-center"
      id={darkMode ? "dark-primary" : null}
    >
      <p>Where in the world?</p>

      <p style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
