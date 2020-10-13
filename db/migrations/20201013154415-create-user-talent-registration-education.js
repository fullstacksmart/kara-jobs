'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_talent_registration_educations', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      study_program: {
        type: Sequelize.STRING
      },
      university: {
        type: Sequelize.STRING
      },
      expected_graduation_year: {
        type: Sequelize.DECIMAL(4,0)
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
    await queryInterface.dropTable('user_talent_registration_educations');
  }
};
