// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);


// User login
router.post('/login', userController.login);

// Delete a user by email
router.delete('/users/:email', userController.deleteUser);

// Get all users
router.get('/getAllUsers/', userController.getAllUsers);

// Update a user by email
router.put('updateUserByEmail/:email', userController.updateUserByEmail);

// Get all users by role
router.get('/getAllUsers/role/:role', userController.getUsersByRole);



module.exports = router;
