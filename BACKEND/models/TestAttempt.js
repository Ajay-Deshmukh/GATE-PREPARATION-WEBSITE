// models/TestAttempt.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Test = require('./Test');

const TestAttempt = sequelize.define('TestAttempt', {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  test_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  started_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  completed_at: {
    type: DataTypes.DATE,
  },
  duration: {
    type: DataTypes.INTEGER, // Time taken to complete the test in minutes
  },
}, {
  timestamps: false,
});


module.exports = TestAttempt;
