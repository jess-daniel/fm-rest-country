import React, { useContext } from "react";
import themeContext from "../contexts/themeContext";

const Search = ({ changeHandler, searchTerm }) => {
  const { theme } = useContext(themeContext);

  return (
    <div className="flex" id={theme ? "dark-search" : null}>
      <input
        className="justify-self-start shadow m-16"
        id={theme ? "dark-input" : null}
        onChange={changeHandler}
        type="text"
        value={searchTerm}
        placeholder="Search"
      />
    </div>
    // TODO: add search by region drop down
  );
};

export default Search;
