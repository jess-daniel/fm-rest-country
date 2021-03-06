import axios from "axios";

const fetchCountryDetails = async (key, name) => await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

export default fetchCountryDetails;