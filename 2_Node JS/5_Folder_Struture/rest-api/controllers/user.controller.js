const User = require("../models/user.model");
// any Imports come Here!

// GET all users
exports.getUsers = async (req, res, next) => {
  try {


    // logic code goes here


  } catch (err) {
    next(err);
  }
};

// GET one user
exports.getUserById = async (req, res, next) => {
  try {


    // logic code goes here


  } catch (err) {
    next(err);
  }
};

// CREATE user
exports.createUser = async (req, res, next) => {
  try {


    // logic code goes here


  } catch (err) {
    next(err);
  }
};

// UPDATE user
exports.updateUser = async (req, res, next) => {
  try {


    // logic code goes here


  } catch (err) {
    next(err);
  }
};

// DELETE user
exports.deleteUser = async (req, res, next) => {
  try {


   // logic code goes here


  } catch (err) {
    next(err);
  }
};

module.exports = {deleteUser, updateUser, createUser, getUserById, getUsers}
