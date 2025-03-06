const express = require('express');
const router = express.Router();
const {
    getAllListings,
    getAvailability,
} = require('../controllers/listingController');
const asyncError = require('../utils/wraperr.js');


router.get('/', asyncError(getAllListings));
router.get('/:id/slots', asyncError(getAvailability));


module.exports = router;
