const express = require('express')
const dotenv = require('dotenv')
const app = express()

app.listen(8800, ()=>{
    console.log("Connected to backend.")
})