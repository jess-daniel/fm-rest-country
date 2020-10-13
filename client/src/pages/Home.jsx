import React from "react";
import { useQuery } from "react-query";
import fetchCountries from "../utils/fetchCountries";
import Country from "../components/Country";

const Home = () => {
  //   const cache = useQueryCache();

  const { data, isError, isLoading } = useQuery("data", fetchCountries, {
    staleTime: "Infinity",
  });

  if (isLoading) {
    return <span>Loading data</span>;
  }

  if (isError) {
    return <span className="text-red-500">There was an error...</span>;
  }

  return (
    <div className="flex flex-wrap justify-center my-10">
      {data.data.map((country) => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default Home;
