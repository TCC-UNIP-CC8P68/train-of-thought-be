const Sequelize = require('sequelize');
const db = require('../util/database');

const Captures = db.define('Captures',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  capturedUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Captures;
