const express = require('express')
const { createBooking, updateBooking, deleteBooking, getBooking, getBookings } = require('../controllers/booking.js');

const router = express.Router();

//CREATE
router.post("/", createBooking)

//UPDATE
router.put("/:id", updateBooking)

//DELETE
router.delete("/:id", deleteBooking)

//GET
router.get("/:id", getBooking)

//GET ALL
router.get("/", getBookings)

module.exports = router;