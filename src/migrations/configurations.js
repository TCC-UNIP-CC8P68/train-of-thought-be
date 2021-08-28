const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.createTable('Configurations', {
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
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('Configurations');
}

module.exports = { up, down };
