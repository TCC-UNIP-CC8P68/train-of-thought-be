const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.createTable('UrlExceptions', {
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
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('UrlExceptions');
}

module.exports = { up, down };
