const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    availability: [
        {
            date: { type: String, required: true },  // Format: YYYY-MM-DD
            slots: [
                {
                    time: { type: String, required: true }, 
                    isBooked: { type: Boolean, default: false }
                }
            ]
        }
    ]
});

module.exports = mongoose.model("Listing", ListSchema);
