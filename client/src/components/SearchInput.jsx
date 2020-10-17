import React, { useState, useContext, useEffect } from "react";
import { useQueryCache } from "react-query";
import themeContext from "../contexts/themeContext";
import searchContext from "../contexts/searchContext";

const SearchInput = () => {
  const { theme } = useContext(themeContext);
  const { setFilteredData } = useContext(searchContext);
  const [searchTerm, setSearchTerm] = useState("");
  const queryCache = useQueryCache();

  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFilteredData(queryCache.getQueryData());
    if (searchTerm) {
      setFilteredData({
        data: queryCache
          .getQueryData()
          .data.filter((obj) =>
            obj.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
          ),
      });
    }
  }, [searchTerm, queryCache]);

  return (
    <div
      className="justify-self-start pr-6/12"
      id={theme ? "dark-search" : null}
    >
      <input
        className="justify-self-start shadow pr-16"
        id={theme ? "dark-input" : null}
        onChange={inputChangeHandler}
        type="text"
        value={searchTerm}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
