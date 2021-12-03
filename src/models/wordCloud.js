const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Users = require('./users.js');

const TopSites = sequelize.define('WordClouds',{
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "Users",
      key: 'id'
    },
    allowNull: false
  },
  wordCloud: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false
  }
});

Users.hasMany(TopSites, {foreignKey: 'userId'})
TopSites.belongsTo(Users, {foreignKey: 'userId'})

module.exports = TopSites;
