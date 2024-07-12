const { Sequelize } = require('sequelize');
require('dotenv').config({ path: './.env' })

console.log('Database URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
