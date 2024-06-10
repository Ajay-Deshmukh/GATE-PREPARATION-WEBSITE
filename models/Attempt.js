const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Test = require('./Test');

const Attempt = sequelize.define('Attempt', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }, allowNull: false },
  test_id: { type: DataTypes.INTEGER, references: { model: Test, key: 'id' }, allowNull: false },
  started_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  completed_at: { type: DataTypes.DATE },
});

module.exports = Attempt;
