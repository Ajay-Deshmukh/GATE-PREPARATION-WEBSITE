// controllers/userController.js
const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, username, password, name, role, branch } = req.body;
    const user = await User.create({ email, username, password, name, role, branch });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Delete a user by email
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findByPk(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};


