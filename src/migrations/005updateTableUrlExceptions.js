const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('UrlExceptions', 'teste', {
    type: Sequelize.STRING,
    allowNull: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('UrlExceptions', 'teste');
}

module.exports = { up, down };
