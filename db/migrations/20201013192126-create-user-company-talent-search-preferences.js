'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_company_talent_search_preferences', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      search_doctor: {
        type: Sequelize.BOOLEAN
      },
      search_nurse: {
        type: Sequelize.BOOLEAN
      },
      search_other: {
        type: Sequelize.BOOLEAN
      },
      search_talent_study_status: {
        type: Sequelize.BOOLEAN
      },
      search_talent_approb_status: {
        type: Sequelize.BOOLEAN
      },
      search_talent_min_german: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('user_company_talent_search_preferences');
  }
};
