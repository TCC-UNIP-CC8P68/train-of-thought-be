const Sequelize = require('sequelize');
const config = require('../config/config.dev.json');

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: 'postgres'
  }
);

module.exports = sequelize;

