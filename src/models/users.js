const Sequelize = require('sequelize');
const db = require('../util/database');

const Users = db.define('Users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
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

module.exports = Users;
