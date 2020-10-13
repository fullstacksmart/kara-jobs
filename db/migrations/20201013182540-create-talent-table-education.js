'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('talent_table_educations', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      university_name: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      filed_of_study: {
        type: Sequelize.STRING
      },
      study_start_year: {
        type: Sequelize.DECIMAL(4,0)
      },
      study_end_year: {
        type: Sequelize.DECIMAL(4,0)
      },
      study_description: {
        type: Sequelize.STRING(500)
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
    await queryInterface.dropTable('talent_table_educations');
  }
};
