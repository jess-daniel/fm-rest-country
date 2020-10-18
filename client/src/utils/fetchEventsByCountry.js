import axios from "axios";

const fetchEventsByCountry = async (key, page, countryCode) => {
    const { data } = await axios.post("/api/eventsByCountry", {page, countryCode});
    return data;
}

export default fetchEventsByCountry;