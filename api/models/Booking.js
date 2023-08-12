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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Booking", BookingSchema);