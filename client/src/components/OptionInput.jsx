import React, { useEffect, useState, useContext } from "react";
import { useQueryCache } from "react-query";
import themeContext from "../contexts/themeContext";
import searchContext from "../contexts/searchContext";

const OptionInput = () => {
  const { theme } = useContext(themeContext);
  const { setFilteredData } = useContext(searchContext);
  const [region, setRegion] = useState("default");
  const queryCache = useQueryCache();

  const optionChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (region !== "default") {
      setFilteredData({
        data: queryCache
          .getQueryData()
          .data.filter((obj) => obj.region === region),
      });
    }
    if (region === "All") {
      queryCache.refetchQueries("data");
      setFilteredData({});
    }
  }, [region, queryCache]);

  return (
    <div>
      <select
        className="p-2 shadow"
        id={theme ? "dark-primary" : null}
        value={region}
        onChange={optionChangeHandler}
      >
        <option value="default">Regions</option>
        <option value="All">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default OptionInput;
