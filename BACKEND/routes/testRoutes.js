const express = require('express');
const testController = require('../controllers/testController');
const router = express.Router();

router.post('/tests', testController.createTest);
router.delete('/tests/:id', testController.deleteTest);
// Additional test routes can be added here

module.exports = router;
