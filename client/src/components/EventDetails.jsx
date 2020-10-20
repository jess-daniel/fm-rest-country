import React from "react";
import { Link, useParams } from "react-router-dom";

const EventDetails = ({ event }) => {
  const { country } = useParams();
  return (
    <div className="flex flex-col justify-between w-1/4 h-26 mx-5 mb-12 bg-gray-100 rounded shadow h-48">
      <Link
        className="flex justify-center"
        to={`/details/${country}/${event.id}`}
      >
        <h5 className="font-bold mx-5">{event.name}</h5>
      </Link>
      {event._embedded.venues.map((venue) => (
        <>
          <p>
            {venue.state
              ? `${venue.city.name}, ${venue.state.name}`
              : `${venue.city.name}, ${venue.country.name}`}
          </p>
        </>
      ))}
      <Link
        className="text-white m-5 h-6 self-center bg-blue-400 rounded-md w-6/12"
        to={`/details/${country}/${event.id}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default EventDetails;
