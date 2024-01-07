const express = require("express");
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API is running'))

app.use('/api/users', userRoutes )

app.listen(PORT, console.log(`PORT is running on ${PORT}`))