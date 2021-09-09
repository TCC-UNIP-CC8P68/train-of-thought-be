const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Users = require('./users.js');

const Configurations = sequelize.define('Configurations',{
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
  timeoutValue: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  allowCapture: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  setBy: {
    type: Sequelize.STRING,
    allowNull: true
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

Users.hasMany(Configurations, {foreignKey: 'userId'})
Configurations.belongsTo(Users, {foreignKey: 'userId'})

module.exports = Configurations;
