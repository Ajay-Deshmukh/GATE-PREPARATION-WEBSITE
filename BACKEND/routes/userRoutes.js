// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Delete a user by email
router.delete('/users/:email', userController.deleteUser);



module.exports = router;
