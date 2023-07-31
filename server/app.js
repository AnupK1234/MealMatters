// import 
const express = require("express");
require("dotenv").config(); // loading environment variables from a .env file into the process.env

// app
const app = express();

// db

// middleware

// routes


// port
const port = process.env.PORT || 8080;


// listener
const server = app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
);