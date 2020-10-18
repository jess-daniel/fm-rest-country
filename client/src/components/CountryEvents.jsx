import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import fetchEventsByCountry from "../utils/fetchEventsByCountry";

const CountryEvents = ({ countryCode }) => {
  const [page, setPage] = useState(0);
  const { resolvedData, latestData, isLoading } = usePaginatedQuery(
    ["events", page, countryCode],
    fetchEventsByCountry
  );

  if (isLoading) {
    return <p>Loading event data...</p>;
  }

  return (
    <section>
      <h4>Events</h4>
      <div>
        <p>Soon to be data</p>
      </div>
    </section>
  );
};

export default CountryEvents;

/* 
NOTE
data.page - pages info
data._embedded.events - events array (20 items)
data._links - page links
*/
