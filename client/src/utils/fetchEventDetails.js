import axios from "axios";

const fetchEventDetails = async (key, id) => {
    const { data } = await axios.post("/api/eventById", { id });
    return data;
}

export default fetchEventDetails;