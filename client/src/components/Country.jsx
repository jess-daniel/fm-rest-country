import React from "react";

const Country = ({ country }) => {
  return (
    <div className="w-2/12 mx-8 my-10 border-solid border-2 p-5 rounded shadow bg-gray-100">
      <div className="relative bg-red-600 pb-8/12">
        <img
          className="absolute h-full w-full object-cover"
          src={country.flag}
          alt={`the flag of ${country.name}`}
        />
      </div>
      <div className="text-left">
        <h2 className="font-bold my-5">{country.name}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.population}</p>
      </div>
    </div>
  );
};

export default Country;
