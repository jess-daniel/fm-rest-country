import axios from "axios";

const fetchCountries = async () =>
  await axios.get("https://restcountries.com/rest/v2/all");

export default fetchCountries;
