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
    allowNull: false
  },
  momentOfCapture: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.JSON,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = Captures;
