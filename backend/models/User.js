const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide your name"],
    // minLength: [3, "Name must be at least 3 characters"],
    // maxLength: [30, "Name must be less than 30 characters"]
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    // validate: {
    //   validator: validator.isEmail,
    //   message: "Please provide a valid Email Address."
    // }
  },
  password: {
    type: String,
    // required: [true, "Please provide your password"],
    // minLength: [8, "Password must be at least 8 characters"],
    // maxLength: [32, "Password must be less than 32 characters"]
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide your phone number"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
