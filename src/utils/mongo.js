const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");
const logger = require("./logger");

require("./userModel");

module.exports = async function () {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGO_URL);
    console.log("MONGO CONNECT");
  } catch (e) {
    console.log("MONGO CONNECT FAILED" + e);
    logger.info("Database connection established!");
  }
};
