'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_company_image_galleries', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_id: {
        type: Sequelize.BIGINT
      },
      image_title: {
        type: Sequelize.STRING
      },
      profile_image: {
        type: Sequelize.BOOLEAN
      },
      image_url: {
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
    await queryInterface.dropTable('user_company_image_galleries');
  }
};
