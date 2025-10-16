const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()

connectDB()

app.get('/', (req,res) => {
    res.send("It is working")
})

app.listen(3000, () =>{
    console.log('server running successfully')
})