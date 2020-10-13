'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('talent_table_experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      position_name: {
        type: Sequelize.STRING
      },
      employer_name: {
        type: Sequelize.STRING
      },
      employer_country: {
        type: Sequelize.STRING
      },
      employer_city: {
        type: Sequelize.STRING
      },
      position_start_month: {
        type: Sequelize.DECIMAL(2,0)
      },
      position_start_year: {
        type: Sequelize.DECIMAL(4,0)
      },
      position_end_month: {
        type: Sequelize.DECIMAL(2,0)
      },
      position_end_year: {
        type: Sequelize.DECIMAL(4,0)
      },
      position_description: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('talent_table_experiences');
  }
};
