const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Users = require('./users.js');

const Captures = sequelize.define('Captures',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "Users",
      key: 'id'
    },
    allowNull: false
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

Users.hasMany(Captures, {foreignKey: 'userId'})
Captures.belongsTo(Users, {foreignKey: 'userId'})

module.exports = Captures;
