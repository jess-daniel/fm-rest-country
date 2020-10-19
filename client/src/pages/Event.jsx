import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import fetchEventDetails from "../utils/fetchEventDetails";

const Event = () => {
  const { id } = useParams();
  const { data } = useQuery(["event", id], fetchEventDetails);

  console.log("event details", data);

  return (
    <div>
      <h1>Event</h1>
    </div>
  );
};

export default Event;
