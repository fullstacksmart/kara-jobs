module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('talent_table_documents', {
      id: {
        type: Sequelize.String,
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
    await queryInterface.dropTable('talent_table_documents');
  },
};
