const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const { configDotenv } = require('dotenv')
const cors = require('cors');

dotenv.config()
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',  // your frontend URL
    credentials: true                 // allow cookies if needed
}));

app.use(express.json())

connectDB()

// user routes
app.use('/api/users', userRoutes)


app.listen(5000, () =>{
    console.log('server running successfully')
})