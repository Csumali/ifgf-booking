const express = require('express')
const Booking = require('../models/Booking')

const router = express.Router();

//CREATE
router.post("/", (req, res) => {

    const newBooking = new Booking(req.body)

    try {
        
    } catch(err) {
        res.status(500).json(err)
    }
})
//UPDATE
//DELETE
//GET
//GET ALL

module.exports = router;