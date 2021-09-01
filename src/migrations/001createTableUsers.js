const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.createTable('Users', {
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
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('Users');
}

module.exports = { up, down };
