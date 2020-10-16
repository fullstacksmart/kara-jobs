module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentRegistrationProficiencies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      occupation_id: {
        type: Sequelize.DECIMAL(1, 0),
        allowNull: false,
      },
      position_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      occupation_status_id: {
        type: Sequelize.DECIMAL(1, 0),
        allowNull: false,
      },
      employer_name: {
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
    await queryInterface.dropTable('TalentRegistrationProficiencies');
  },
};
