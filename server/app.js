const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");  
const dbConnect = require("./config/connect.js");
const Routes = require("./routes/index.js");

const app = express();

/**
 * dotenv configuration - loading environment variables from a .env file into the process.env
 */
dotenv.config()

/**
 * middlewares
*/
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
*/
app.use(Routes);

/**
 * connect to db then start server
 */
dbConnect(() => app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
))

