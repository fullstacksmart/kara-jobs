'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_talent_registration_proficiencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      occupation_id: {
        type: Sequelize.DECIMAL(1,0),
      },
      position_name: {
        type: Sequelize.STRING
      },
      occupation_status_id: {
        type: Sequelize.DECIMAL(1,0)
      },
      employer_name: {
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
    await queryInterface.dropTable('user_talent_registration_proficiencies');
  }
};
