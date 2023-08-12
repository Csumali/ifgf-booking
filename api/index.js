const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bookingRoute = require('./routes/booking.js')

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch(error) {
        throw error;
    }   
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

// middleware
app.use("/api/booking", bookingRoute)

app.get("/", (req, res)=>{
    res.send("hello first req!")
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})