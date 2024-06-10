const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a test by ID
exports.deleteTest = async (req, res) => {
  try {
      const testId = req.params.id;

      // Check if the test exists
      const test = await Test.findByPk(testId);

      if (!test) {
          return res.status(404).json({ message: 'Test not found' });
      }

      // Delete the test
      await test.destroy();

      res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
      console.error('Error deleting test:', error);
      res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
};
// Additional test-related controller functions can be added here
