const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is Connect successfully");
  } catch (e) {
    console.error("MongoDB Connection Has Been Failed");
    process.exit(1);
  }
};

module.exports = connectToDB;