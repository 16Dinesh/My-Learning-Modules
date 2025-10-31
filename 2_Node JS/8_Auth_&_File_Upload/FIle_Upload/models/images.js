const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // Cloudinary URL
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
