// models/TestAttempt.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Test = require('./Test');

const TestAttempt = sequelize.define('TestAttempt', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.STRING, allowNull: false, references: { model: User, key: 'email' } },
  test_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Test, key: 'id' } },
  started_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  completed_at: { type: DataTypes.DATE },
});

module.exports = TestAttempt;
