const express = require('express');
const router = express.Router({mergeParams:true});
const {
    bookSlot,getAppointments,cancelAppointment
} = require('../controllers/bookingController.js');
const asyncError = require('../utils/wraperr.js');
const { isloggedin } = require('../middlewares/authMiddleware');

router.post('/', asyncError(bookSlot));
router.get("/:userId/appointments" , asyncError(getAppointments));
router.patch("/cancel/:appointmentId" , asyncError(cancelAppointment));

module.exports = router;