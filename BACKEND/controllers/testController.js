// controllers/testController.js
const { Op } = require('sequelize');
const Test = require('../models/Test');
const TestAttempt = require('../models/TestAttempt');
const User = require('../models/User'); // Assuming you need user data
const Result = require('../models/Result'); // Assuming results are in a separate model

// Create a new test
exports.createTest = async (req, res) => {
  try {
    const { title, description, type, created_by, chapter, subject, duration } = req.body;
    const test = await Test.create({ title, description, type, created_by, chapter, subject, duration });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
};

// Get all tests
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};

// Get a single test by ID
exports.getTestById = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test', error: error.message });
  }
};

// Update a test
exports.updateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type, chapter, subject, duration } = req.body;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    test.title = title;
    test.description = description;
    test.type = type;
    test.chapter = chapter;
    test.subject = subject;
    test.duration = duration;
    await test.save();
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error updating test', error: error.message });
  }
};

// Delete a test
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

// Start a test attempt
exports.startTestAttempt = async (req, res) => {
  try {
    const { user_id, test_id } = req.body;
    const test = await Test.findByPk(test_id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    const testAttempt = await TestAttempt.create({ user_id, test_id });
    res.status(201).json(testAttempt);
  } catch (error) {
    res.status(500).json({ message: 'Error starting test attempt', error: error.message });
  }
};

// Complete a test attempt
exports.completeTestAttempt = async (req, res) => {
  try {
    const { attempt_id } = req.body;
    const testAttempt = await TestAttempt.findByPk(attempt_id);
    if (!testAttempt) {
      return res.status(404).json({ message: 'Test attempt not found' });
    }
    testAttempt.completed_at = new Date();
    const duration = Math.floor((testAttempt.completed_at - testAttempt.started_at) / 60000); // Calculate duration in minutes
    testAttempt.duration = duration;
    await testAttempt.save();
    res.status(200).json(testAttempt);
  } catch (error) {
    res.status(500).json({ message: 'Error completing test attempt', error: error.message });
  }
};

// Get all test attempts for a user
exports.getTestAttemptsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const testAttempts = await TestAttempt.findAll({ where: { user_id } });
    res.status(200).json(testAttempts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test attempts', error: error.message });
  }
};

// Get a single test attempt by ID
exports.getTestAttemptById = async (req, res) => {
  try {
    const { id } = req.params;
    const testAttempt = await TestAttempt.findByPk(id);
    if (!testAttempt) {
      return res.status(404).json({ message: 'Test attempt not found' });
    }
    res.status(200).json(testAttempt);
  } catch (error) {
    res.status (500).json({ message: 'Error fetching test attempt', error: error.message });
  }
};

// Get results for a test attempt
exports.getTestAttemptResults = async (req, res) => {
  try {
    const { attempt_id } = req.params;
    const results = await Result.findAll({ where: { attempt_id } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test attempt results', error: error.message });
  }
};

exports.getTests = async (req, res) => {
  try {
    const { type, title, chapter, subject } = req.query;
    const branch = req.branch;

    const filter = { branch };

    if (type) {
      const validTypes = ['GATE_PYQ', 'MOCK_TEST', 'CUSTOM_TEST', 'CHAPTER_WISE', 'SUBJECT_WISE'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({ message: 'Invalid test type provided' });
      }
      filter.type = type;
    }

    if (title) {
      filter.title = { [Op.like]: `%${title}%` };
    }

    if (chapter) {
      filter.chapter = { [Op.like]: `%${chapter}%` };
    }

    if (subject) {
      filter.subject = { [Op.like]: `%${subject}%` };
    }

    const tests = await Test.findAll({
      where: filter,
      attributes: ['id', 'title', 'description', 'chapter', 'subject', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};