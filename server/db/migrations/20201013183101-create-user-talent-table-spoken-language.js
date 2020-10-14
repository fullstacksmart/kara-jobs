module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentTableSpokenLanguages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      spoken_language: {
        type: Sequelize.STRING,
      },
      spoken_language_proficiency: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('TalentTableSpokenLanguages');
  },
};
