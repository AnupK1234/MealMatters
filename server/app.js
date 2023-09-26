// import 
const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv").config(); // loading environment variables from a .env file into the process.env
const mongoose = require("mongoose")

// app
const app = express();

// db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB is successfully connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// middleware

// routes


// port


// listener
const server = app.listen(process.env.PORT, () => 
    console.log(`Server is running on port ${process.env.PORT}`)
);