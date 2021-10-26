const Sequelize = require('sequelize');
const sequelize = require('../util/database');  

const Users = sequelize.define('Users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
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


/* Users.hasMany(Configurations, {foreignKey: 'userId'})
Configurations.belongsTo(Users, {foreignKey: 'userId'})
 */
module.exports = Users;
