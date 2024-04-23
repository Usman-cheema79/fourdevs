// userController.js

const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

// POST - Create a new user
router.post('/users', async (req, res) => { // Remove '/users' prefix
  try {
    // Validate the request body
    // Check if the username is already taken
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      console.log("alrready exist");
      return res.status(400).send({ error: 'Username is already taken' });
    }
    // Hash the password
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Create a new user instance
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber
    });

    // Save the user to the database
    await user.save();
    res.status(200).json({ message: "Registered successfully.", user });  }
     catch (error) {
    res.status(400).send(error);
  }
});

// GET - Retrieve all users
router.get('/users', async (req, res) => { // Remove '/users' prefix

  try {
    const users = await User.find();

    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET - Retrieve a single user by ID
router.get('/users/:id', async (req, res) => { // Remove '/users' prefix
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PATCH - Update a user by ID
router.patch('/users/:id', async (req, res) => { // Remove '/users' prefix
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email', 'password', 'phoneNumber'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    updates.forEach(update => user[update] = req.body[update]);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE - Delete a user by ID
router.delete('/users/:id', async (req, res) => { // Remove '/users' prefix
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
