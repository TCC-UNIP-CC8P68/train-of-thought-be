const Sequelize = require('sequelize');
const db = require('../util/database');

const Configurations = db.define('Configurations',{
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
    type: Sequelize.STRING,
    allowNull: false
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

module.exports = Configurations;
