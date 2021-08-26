const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.createTable('Captures', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    capturedUrl: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('Captures');
}

module.exports = { up, down };
