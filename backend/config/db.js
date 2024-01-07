const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Mongodb Connected`)
    } catch (error) {
        console.log(error.message)
        process.exit()
    }       
}

module.exports = connectDB;