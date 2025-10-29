const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  age: {
    type: Number,
    min: [1, "Age must be positive"],
  },
});

module.exports = mongoose.model("User", userSchema);
