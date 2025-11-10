const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({});

module.exports = mongoose.model("Author", AuthorSchema);
