import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import fetchEventDetails from "../utils/fetchEventDetails";
import themeContext from "../contexts/themeContext";

const Event = () => {
  const { id, country } = useParams();
  const history = useHistory();
  const { theme } = useContext(themeContext);
  const { data, isLoading } = useQuery(["event", id], fetchEventDetails);

  if (isLoading) {
    return <p>Event data loading</p>;
  }
  console.log("event details", data);

  return (
    <section>
      <button
        className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg self-start"
        id={theme ? "dark-primary" : null}
        onClick={() => history.push(`/details/${country}`)}
      >
        Go Back
      </button>
      <div>
        <h1>{data.name}</h1>
      </div>
      <div className="flex justify-center">
        {data.images
          .filter((img) => img.height === 360 && img.width === 640)
          .map((imgs) => (
            <img
              key={imgs.url}
              style={{ width: "360px" }}
              src={imgs.url}
              alt={`image for ${data.name}`}
              className="m-3"
            />
          ))}
        {data.seatmap ? (
          <img
            style={{ width: "360px" }}
            src={data.seatmap.staticUrl}
            alt="seat map image"
            className="m-3"
          />
        ) : null}
      </div>
      <div>
        {data.classifications.map((arr) => (
          <p key={arr.genre.id}>{arr.genre.name}</p>
        ))}
        <p>Date: {data.dates.start.localDate}</p>
        <p>Time: {data.dates.start.localTime}</p>
        <p>Status: {data.dates.status.code}</p>
        <p>{data.ticketLimit ? data.ticketLimit.info : null}</p>
        <p>
          {data.accessibility
            ? `Accessibility: ${data.accessibility.ticketLimit} ticket limit`
            : null}
        </p>
      </div>
    </section>
  );
};

export default Event;
