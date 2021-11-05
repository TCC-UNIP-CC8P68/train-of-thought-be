const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Users = require('./users.js');

const TopSites = sequelize.define('TopSites',{
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "Users",
      key: 'id'
    },
    allowNull: false
  },
  topSites: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Users.hasMany(TopSites, {foreignKey: 'userId'})
TopSites.belongsTo(Users, {foreignKey: 'userId'})


module.exports = TopSites;
