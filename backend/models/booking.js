const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ["Booked", "Cancelled"], default: "Booked" },
    cancelledAt: { type: Date }
});

module.exports = mongoose.model("Booking", BookingSchema);
