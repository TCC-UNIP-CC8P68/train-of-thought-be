const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Users = require('./users.js');

const UrlExceptions = sequelize.define('UrlExceptions',{
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
  url: {
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

Users.hasMany(UrlExceptions, {foreignKey: 'userId'})
UrlExceptions.belongsTo(Users, {foreignKey: 'userId'})

module.exports = UrlExceptions;
