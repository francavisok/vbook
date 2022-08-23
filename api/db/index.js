const Sequelize = require('sequelize');
const db = new Sequelize('vbook', "postgres", "123", {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;