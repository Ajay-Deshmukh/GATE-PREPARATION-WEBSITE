const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Attempt = require('./Attempt');

const Result = sequelize.define('Result', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  attempt_id: { type: DataTypes.INTEGER, references: { model: Attempt, key: 'id' }, allowNull: false },
  score: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = Result;
