const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.MONGO_URL;

const connect = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to database")
    } catch (error) {
        console.error("Error connecting to database", error)
    }
}

module.exports = connect