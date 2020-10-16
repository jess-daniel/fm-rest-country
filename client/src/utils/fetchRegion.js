import axios from "axios";

const fetchRegion = async (region) => {
    
    console.log("inside fetch", region);
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`);

}
export default fetchRegion;