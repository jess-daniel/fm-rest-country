import React, { useContext } from "react";
import { Link } from "react-router-dom";
import themeContext from "../contexts/themeContext";

const Country = ({ country }) => {
  const { theme } = useContext(themeContext);
  const popInt = new Intl.NumberFormat().format(country.population);
  return (
    <div
      className="w-2/12 mx-8 my-10 p-5 rounded shadow bg-gray-100"
      id={theme ? "dark-primary" : null}
    >
      <Link to={`/details/${country.name}`}>
        <div className="relative pb-8/12">
          <img
            className="absolute h-full w-full object-cover"
            src={country.flag}
            alt={`the flag of ${country.name}`}
          />
        </div>
        <div className="text-left">
          <h2 className="font-bold my-5">{country.name}</h2>
          <p>Population: {popInt}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
