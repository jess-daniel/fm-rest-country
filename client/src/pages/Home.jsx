import React, { useState, useContext } from "react";
import { useQuery, useQueryCache } from "react-query";
import fetchCountries from "../utils/fetchCountries";
import Country from "../components/Country";
import themeContext from "../contexts/themeContext";
import Search from "../components/Search";

const Home = () => {
  const queryCache = useQueryCache();
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useContext(themeContext);
  const { data, isError, isLoading } = useQuery("data", fetchCountries);

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

  if (isLoading) {
    return <span>Loading data</span>;
  }

  if (isError) {
    return <span className="text-red-500">There was an error...</span>;
  }

  return (
    <>
      <Search changeHandler={changeHandler} searchTerm={searchTerm} />
      <div
        className="flex flex-wrap justify-center pt-10 mb-10"
        id={theme ? "dark-secondary" : null}
      >
        {data &&
          data.data.map((country) => (
            <Country key={country.alpha3Code} country={country} />
          ))}
      </div>
    </>
  );
};

export default Home;
