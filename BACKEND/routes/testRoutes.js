// routes/testRoutes.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

// Create a new test
router.post('/tests/', testController.createTest);

// Delete a test by ID
router.delete('/tests/:id', testController.deleteTest);

module.exports = router;
