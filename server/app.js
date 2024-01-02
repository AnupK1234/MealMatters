// import 
const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv"); // loading environment variables from a .env file into the process.env
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController');
const uploadController = require("./controllers/uploadController");
const contactFormController = require("./controllers/contactFormController.js")

// app
const app = express();

dotenv.config()

// db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB is successfully connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// middleware & routes - those two middleswares make req.body accessible, otherwise it would be undefined
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)
app.use('/contact-us', contactFormController)

// listener
const server = app.listen(process.env.PORT, () => 
    console.log(`Server is running on port ${process.env.PORT}`)
);
