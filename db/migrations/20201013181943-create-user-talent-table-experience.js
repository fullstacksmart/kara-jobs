module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentTableExperiences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      position_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employer_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employer_country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employer_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position_start_month: {
        type: Sequelize.DECIMAL(2, 0),
        allowNull: false,
      },
      position_start_year: {
        type: Sequelize.DECIMAL(4, 0),
        allowNull: false,
      },
      position_end_month: {
        type: Sequelize.DECIMAL(2, 0),
      },
      position_end_year: {
        type: Sequelize.DECIMAL(4, 0),
      },
      position_description: {
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
    await queryInterface.dropTable('TalentTableExperiences');
  },
};
