// controllers/testController.js
const Test = require('../models/Test');

// Create a new test
exports.createTest = async (req, res) => {
  try {
    const { title, description, type, created_by, chapter, subject } = req.body;
    const test = await Test.create({ title, description, type, created_by, chapter, subject });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
};

// Delete a test by ID
exports.deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    await test.destroy();
    res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
};
