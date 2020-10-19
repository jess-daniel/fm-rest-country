import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import fetchEventsByCountry from "../utils/fetchEventsByCountry";
import EventDetails from "../components/EventDetails";

const CountryEvents = ({ countryCode }) => {
  const [page, setPage] = useState(0);
  const { resolvedData, latestData, isLoading } = usePaginatedQuery(
    ["events", page, countryCode],
    fetchEventsByCountry
  );

  if (isLoading) {
    return <p>Loading event data...</p>;
  }

  console.log("data", resolvedData._embedded.events);

  return (
    <section>
      <h2 className="p-8 font-bold">Events</h2>
      <div className="flex flex-wrap justify-center">
        {resolvedData._embedded ? (
          resolvedData._embedded.events.map((event) => (
            <EventDetails key={event.id} event={event} />
          ))
        ) : (
          <p>No events</p>
        )}
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
