module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserCompanyEmployees', {
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      onboarding_page: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      onboarding_completed: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('UserCompanyEmployees');
  },
};
