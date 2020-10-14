module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_company_profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      company_about_text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_offer_text: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('user_company_profiles');
  },
};
