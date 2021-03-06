import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchCountryDetails from "../utils/fetchCountryDetails";
import Details from "../components/Details";
import CountryEvents from "../components/CountryEvents";

const CountryDetails = () => {
  const { country } = useParams();
  const { data, isError } = useQuery(
    country && ["details", country],
    fetchCountryDetails
  );

  if (isError) {
    return <p className="text-red-600">Data Error</p>;
  }

  return (
    <>
      {data &&
        data.data.map((country) => (
          <>
            <Details key={country.alpha3Code} details={country} />
            <CountryEvents
              key={country.alpha2Code}
              countryCode={country.alpha2Code}
            />
          </>
        ))}
    </>
  );
};

export default CountryDetails;
