import React, { useState, useEffect, useContext } from "react";
import { useQueryCache } from "react-query";
import themeContext from "../contexts/themeContext";

const Search = () => {
  const { theme } = useContext(themeContext);
  const queryCache = useQueryCache();
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("default");

  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);

    queryCache.setQueryData("data", (data) => {
      return {
        data: data.data.filter((obj) =>
          obj.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
        ),
      };
    });
  };

  const optionChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (region !== "default") {
      console.log("in useeffct", region);
      queryCache.setQueryData("data", (data) => {
        return {
          data: data.data.filter((obj) => obj.region === region),
        };
      });
    }
    if (region === "All") {
      queryCache.refetchQueries("data");
    }
  }, [region, queryCache]);

  return (
    <section
      className="flex items-center justify-around pt-16 mt-0 mx-auto"
      id={theme ? "dark-search" : null}
    >
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
        <button
          className="px-5"
          id={theme ? "dark-secondary" : null}
          onClick={() => queryCache.refetchQueries("data")}
        >
          Refresh
        </button>
      </div>
      <div>
        <select
          className="p-2"
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
    </section>
  );
};

export default Search;
