const Author = require("../models/Author.models");
const Book = require("../models/Books.model");

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.Body);
    await author.save();

    res.status(201).json({
      success: true,
      data: author,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error Occurred",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error Occurred",
    });
  }
};

const getBookWithAuthor = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id).populate("author");

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error Occurred",
    });
  }
};

module.exports = { createAuthor, createBook, getBookWithAuthor };
