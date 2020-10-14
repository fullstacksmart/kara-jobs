module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserTalentRegistrationEducations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      study_program: {
        type: Sequelize.STRING,
      },
      university: {
        type: Sequelize.STRING,
      },
      expected_graduation_year: {
        type: Sequelize.DECIMAL(4, 0),
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
    await queryInterface.dropTable('UserTalentRegistrationEducations');
  },
};
