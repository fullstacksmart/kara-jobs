module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'CompanyEmployees',
      'CompanyId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Companies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    )
      .then(queryInterface.addColumn(
        'CompanyImageGalleries',
        'CompanyId',
        {
          type: Sequelize.STRING,
          references: {
            model: 'Companies',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ))
      .then(queryInterface.addColumn(
        'CompanyTalentSearchPreferences',
        'CompanyId',
        {
          type: Sequelize.STRING,
          references: {
            model: 'Companies',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ))
      .then(queryInterface.addColumn(
        'CompanyRecruitmentPreferences',
        'CompanyId',
        {
          type: Sequelize.STRING,
          references: {
            model: 'Companies',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ))
      .then(queryInterface.addColumn(
        'CompanyProfiles',
        'CompanyId',
        {
          type: Sequelize.STRING,
          references: {
            model: 'Companies',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ));
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'CompanyEmployees',
      'CompanyId',
    )
      .then(queryInterface.removeColumn(
        'CompanyImageGalleries',
        'CompanyId',
      ))
      .then(queryInterface.removeColumn(
        'CompanyTalentSearchPreferences',
        'CompanyId',
      ))
      .then(queryInterface.removeColumn(
        'CompanyRecruitmentPreferences',
        'CompanyId',
      ))
      .then(queryInterface.removeColumn(
        'CompanyProfiles',
        'CompanyId',
      ));
  },
};
