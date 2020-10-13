'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_company_recruitment_preferences', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receive_initiative_application: {
        type: Sequelize.BOOLEAN
      },
      offer_approb_training: {
        type: Sequelize.BOOLEAN
      },
      receive_international_application: {
        type: Sequelize.BOOLEAN
      },
      receive_agency_application: {
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
    await queryInterface.dropTable('user_company_recruitment_preferences');
  }
};
