// models/Test.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Test = sequelize.define('Test', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  type: { type: DataTypes.ENUM('GATE_PYQ', 'MOCK_TEST', 'CUSTOM_TEST', 'CHAPTER_WISE', 'SUBJECT_WISE'), allowNull: false },
  created_by: { type: DataTypes.STRING, references: { model: User, key: 'email' } },
  chapter: { type: DataTypes.STRING },
  subject: { type: DataTypes.STRING },
createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
timestamps: true,
updatedAt: false,
});

module.exports = Test;
