const Listing = require('../models/listing.js');

const getAllListings = async (req, res) => {
    const data = await Listing.find({});
    res.status(200).json({ message: "success"  , data : data});
};

const getAvailability =  async (req, res) => {
    try {
        const doctor = await Listing.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        res.status(200).json({message: "success",data : doctor});
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};


module.exports = {
    getAllListings,
    getAvailability,
};
