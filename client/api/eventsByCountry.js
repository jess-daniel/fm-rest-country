import axios from "axios";


export default async (req, res) => {
    const { countryCode, page } = req.body;

    try {
        const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&countryCode=${countryCode}&apikey=${process.env.TM_API_KEY}`)
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message});
    }
}