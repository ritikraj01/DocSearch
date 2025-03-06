const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");
const User = require('../models/user.js');
const sendBookingNotification = require('../utils/mailer.js');


const bookSlot = async (req, res) => {
    const { doctorId, patientId , date, time } = req.body;

    try {
        if (!doctorId || !date || !time) {
            return res.status(400).json({ message: "doctorId, date, and time are required" });
        }

        const doctor = await Listing.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        const availability = doctor.availability.find(avail => avail.date === date);
        if (!availability) {
            return res.status(404).json({ message: "No available slots for the selected date" });
        }

        const slot = availability.slots.find(slot => slot.time === time);
        if (!slot) {
            return res.status(404).json({ message: "Time slot not found" });
        }

        if (slot.isBooked) {
            return res.status(400).json({ message: "Slot is already booked" });
        }

        slot.isBooked = true;
        await doctor.save();
        const userData = await User.findById(patientId);

        const booking = new Booking({ doctorId, patientId, date, time });
        await booking.save();
        console.log(userData.email);
        console.log(userData.username);
        await sendBookingNotification(userData.email, userData.name, time);
        res.status(200).json({ message: "Slot booked successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getAppointments =  async (req, res) => {
    try {
        const appointments = await Booking.find({ patientId: req.params.userId })
            .populate("doctorId", "name"); 
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: "Error fetching appointments." });
    }
};

const cancelAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;

        const booking = await Booking.findById(appointmentId);
        if (!booking) {
            return res.status(404).json({ message: "Appointment not found." });
        }

        const doctor = await Listing.findById(booking.doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found." });
        }

        const availability = doctor.availability.find(avail => avail.date === booking.date);
        if (!availability) {
            return res.status(404).json({ message: "Doctor's schedule for this date not found." });
        }

        const slot = availability.slots.find(slot => slot.time === booking.time);
        if (!slot) {
            return res.status(404).json({ message: "Time slot not found in doctor's schedule." });
        }

        slot.isBooked = false; 
        await doctor.save();   

        
        booking.status = "Cancelled";
        booking.cancelledAt = new Date();
        await booking.save();

        res.json({ message: "Appointment cancelled successfully.", booking });
    } catch (err) {
        res.status(500).json({ message: "Failed to cancel appointment.", error: err.message });
    }
};



module.exports = {bookSlot , getAppointments , cancelAppointment};
