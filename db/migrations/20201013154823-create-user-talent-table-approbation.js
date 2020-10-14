module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TalentTableApprobations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      approbation_started: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      approbation_federal_state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      approbation_feedback: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      approbation_status: {
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
    await queryInterface.dropTable('TalentTableApprobations');
  },
};
