module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_talent_generals', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      iso_code: {
        type: Sequelize.STRING(2),
      },
      residence: {
        type: Sequelize.STRING,
      },
      zip_code: {
        type: Sequelize.DECIMAL(8, 0),
      },
      city: {
        type: Sequelize.STRING,
      },
      onboarding_page: {
        type: Sequelize.Integer
      },
      onboarding_completed: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('user_talent_generals');
  },
};
