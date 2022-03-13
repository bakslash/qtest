'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personnels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      reset_passord: {
        type: Sequelize.BOOLEAN
      },
      token: {
        type: Sequelize.STRING
      },
      expires_in: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('personnels');
  }
};