const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    }, 
    endTime: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Booking", BookingSchema);