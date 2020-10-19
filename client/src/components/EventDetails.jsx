import React from "react";
import { Link } from "react-router-dom";

const EventDetails = ({ event }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to={`/event/${event.id}`}>
        <h5 className="font-bold mx-5 w-6/12">{event.name}</h5>
        {event._embedded.venues.map((venue) => (
          <>
            <p>{venue.alias}</p>
            <p>
              {venue.city.name}, {venue.state.name}
            </p>
          </>
        ))}
      </Link>
    </div>
  );
};

export default EventDetails;
