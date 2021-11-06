import axios from "axios";

const fetchRegion = async (region) => {
  return axios.get(`https://restcountries.com/rest/v2/region/${region}`);
};
export default fetchRegion;
