import React, { useContext } from "react";
import { useQuery } from "react-query";
import fetchCountries from "../utils/fetchCountries";
import Country from "../components/Country";
import themeContext from "../contexts/themeContext";
import Search from "../components/Search";

const Home = () => {
  const { theme } = useContext(themeContext);
  const { data, isError, isLoading } = useQuery("data", fetchCountries);

  if (isLoading) {
    return <span>Loading data</span>;
  }

  if (isError) {
    return <span className="text-red-500">There was an error...</span>;
  }

  return (
    <>
      <Search />
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
