// models/Option.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Question = require('./Question');

const Option = sequelize.define('Option', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  question_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Question, key: 'id' } },
  option_text: { type: DataTypes.STRING, allowNull: false },
  is_correct: { type: DataTypes.BOOLEAN, allowNull: false },
});

module.exports = Option;
