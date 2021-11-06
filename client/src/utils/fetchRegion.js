import axios from "axios";

const fetchRegion = async (region) => {
  return axios.get(`https://restcountries.com/v2/region/${region}`);
};
export default fetchRegion;
