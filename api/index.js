const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth.js')
const bookingRoute = require('./routes/booking.js')
const userRoute = require('./routes/users.js')
const cookieParser = require('cookie-parser')

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
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/booking", bookingRoute)
app.use("/api/users", userRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})