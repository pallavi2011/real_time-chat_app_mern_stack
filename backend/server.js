const express = require("express");
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db');

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API is running'))

app.get('/api/chat', (req, res) => {
    res.send("chats")
})

app.get('/api/chat/:id', (req, res) => {
    res.send("chats")
})
app.listen(PORT, console.log(`PORT is running on ${PORT}`))