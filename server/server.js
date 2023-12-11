const express = require("express");
const cors= require("cors");
const connect = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    return res.send("Welcome to my todo app")
})


app.listen(PORT, (req, res) => {
    try {
        connect();
        console.log(`Server connected to port ${PORT}`)
    } catch (error) {
        console.error("Error connecting to backend", error.message);
    }
})