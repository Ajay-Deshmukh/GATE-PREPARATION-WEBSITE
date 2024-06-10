const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, password, name, email, role } = req.body;
    const newUser = await User.create({
      username,
      password,
      name,
      email,
      role,
    });
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming you pass the user ID in the request params
    console.log('User ID to delete:', userId); // Debugging log
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy(); // Delete the user
    console.log('User deleted:', user); // Debugging log

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};