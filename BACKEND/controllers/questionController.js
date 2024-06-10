const Question = require('../models/Question');

exports.createQuestion = async (req, res) => {
    try {
      const question = await Question.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Additional question-related controller functions can be added here
  
