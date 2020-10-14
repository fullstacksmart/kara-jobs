module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyTalentSearchPreferences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      search_doctor: {
        type: Sequelize.BOOLEAN,
      },
      search_nurse: {
        type: Sequelize.BOOLEAN,
      },
      search_other: {
        type: Sequelize.BOOLEAN,
      },
      search_talent_study_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      search_talent_approb_status: {
        type: Sequelize.BOOLEAN,
      },
      search_talent_min_german: {
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
    await queryInterface.dropTable('CompanyTalentSearchPreferences');
  },
};
