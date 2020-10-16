module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyRecruitmentPreferences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      receive_initiative_application: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      offer_approb_training: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      receive_international_application: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      receive_agency_application: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('CompanyRecruitmentPreferences');
  },
};
