module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('talent_table_about_mes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      about_me_text: {
        type: Sequelize.STRING(800),
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
    await queryInterface.dropTable('talent_table_about_mes');
  },
};
