import axios from "axios";

const fetchCountries = async () =>
  await axios.get("https://restcountries.com/v2/all");

export default fetchCountries;
