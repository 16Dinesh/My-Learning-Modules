const express = require("express");
const upload = require("../config/multer");
const User = require("../models/userModel");

const router = express.Router();

router.post("/", upload.single("avatar"), async (req, res) => {
  try {
    const { name } = req.body;
    const imageUrl = req.file.path; // Cloudinary URL

    const newUser = new User({
      name,
      avatar: imageUrl,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
