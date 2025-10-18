const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const { configDotenv } = require('dotenv')
const cors = require('cors');

dotenv.config()
const app = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
}));

app.use(express.json())

connectDB()

// user routes
app.use('/api/users', userRoutes)


app.listen(5000, () =>{
    console.log('server running successfully')
})