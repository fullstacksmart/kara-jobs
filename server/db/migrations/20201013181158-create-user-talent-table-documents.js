module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentTableDocuments', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      document_type: {
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
    await queryInterface.dropTable('TalentTableDocuments');
  },
};
