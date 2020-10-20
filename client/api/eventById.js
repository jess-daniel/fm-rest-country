const axios = require("axios");


module.exports = async (req, res) => {
    const { id } = req.body;

    try {
        const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.TM_API_KEY}`)

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({message: "server error", error: error.message});
    }
}