const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Test = require('./Test');

const Question = sequelize.define('Question', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  test_id: { type: DataTypes.INTEGER, references: { model: Test, key: 'id' }, allowNull: false },
  question_text: { type: DataTypes.TEXT, allowNull: false },
  question_type: { type: DataTypes.ENUM('MCQ', 'NUMERICAL'), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Question;
