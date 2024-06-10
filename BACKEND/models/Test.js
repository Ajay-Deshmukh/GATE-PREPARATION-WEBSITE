const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Test = sequelize.define('Test', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  type: { type: DataTypes.ENUM('GATE_PYQ', 'MOCK_TEST', 'CUSTOM_TEST'), allowNull: false },
  created_by: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false
});


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

module.exports = Test;
