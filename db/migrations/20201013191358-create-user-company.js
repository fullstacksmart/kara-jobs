module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_companies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_sector: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_street_no: {
        type: Sequelize.STRING,
      },
      company_address_additional: {
        type: Sequelize.STRING,
      },
      company_zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_website: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_companies');
  },
};
