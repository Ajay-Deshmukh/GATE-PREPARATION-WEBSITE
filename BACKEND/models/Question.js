// models/Question.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Test = require('./Test');

const Question = sequelize.define('Question', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  test_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Test, key: 'id' } },
  question_text: { type: DataTypes.TEXT, allowNull: false },
  question_type: { type: DataTypes.ENUM('MCQ', 'NUMERICAL'), allowNull: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false,
});

module.exports = Question;
