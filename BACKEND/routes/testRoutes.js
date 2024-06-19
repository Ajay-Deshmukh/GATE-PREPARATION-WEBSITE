// routes/testRoutes.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new test
router.post('/', testController.createTest);

// Get all tests
router.get('/', testController.getAllTests);

// Get a single test by ID
router.get('/:id', testController.getTestById);

// Update a test
router.put('/:id', testController.updateTest);

// Delete a test
router.delete('/:id', testController.deleteTest);

// Start a test attempt
router.post('/start', testController.startTestAttempt);

// Complete a test attempt
router.post('/complete', testController.completeTestAttempt);

// Get all test attempts for a user
router.get('/attempts/user/:user_id', testController.getTestAttemptsByUser);

// Get a single test attempt by ID
router.get('/attempts/:id', testController.getTestAttemptById);

// Get results for a test attempt
router.get('/attempts/:attempt_id/results', testController.getTestAttemptResults);

// Get tests by filters
router.get('/tests', authMiddleware.authenticateToken, authMiddleware.extractBranchFromCookies, testController.getTests);

module.exports = router;
