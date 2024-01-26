const mongoose = require("mongoose");

const dbConnect = async (callback) => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URL);
    if (connect) {
      console.log("DB is successfully connected");
      callback(); //start the server
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = dbConnect;
