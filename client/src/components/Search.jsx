import React, { useState, useContext } from "react";
import { useQueryCache } from "react-query";
import themeContext from "../contexts/themeContext";

const Search = () => {
  const { theme } = useContext(themeContext);
  const queryCache = useQueryCache();
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);

    queryCache.setQueryData("data", (data) => {
      return {
        data: data.data.filter((obj) =>
          obj.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
        ),
      };
    });
  };

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
