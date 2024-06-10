const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Attempt = require('./Attempt');
const Question = require('./Question');
const Option = require('./Option');

const Response = sequelize.define('Response', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  attempt_id: { type: DataTypes.INTEGER, references: { model: Attempt, key: 'id' }, allowNull: false },
  question_id: { type: DataTypes.INTEGER, references: { model: Question, key: 'id' }, allowNull: false },
  option_id: { type: DataTypes.INTEGER, references: { model: Option, key: 'id' } },
  numerical_response: { type: DataTypes.DECIMAL(10, 2) },
});

module.exports = Response;
