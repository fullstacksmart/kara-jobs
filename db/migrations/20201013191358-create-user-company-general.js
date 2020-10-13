'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_company_generals', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      company_sector: {
        type: Sequelize.STRING
      },
      company_type: {
        type: Sequelize.STRING
      },
      company_street: {
        type: Sequelize.STRING
      },
      company_street_no: {
        type: Sequelize.STRING
      },
      company_address_additional: {
        type: Sequelize.STRING
      },
      company_zip_code: {
        type: Sequelize.STRING
      },
      company_city: {
        type: Sequelize.STRING
      },
      company_website: {
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
    await queryInterface.dropTable('user_company_generals');
  }
};
