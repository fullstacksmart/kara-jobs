module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'TalentTableAboutMes',
    'TalentId',
    {
      type: Sequelize.STRING,
      references: {
        model: 'Talents',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
    .then(queryInterface.addColumn(
      'TalentRegistrationProficiencies',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentRegistrationEducations',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableApprobations',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableDocuments',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableExperiences',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableEducations',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableSpokenLanguages',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ))
    .then(queryInterface.addColumn(
      'TalentTableOtherSkills',
      'TalentId',
      {
        type: Sequelize.STRING,
        references: {
          model: 'Talents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    )),
  down: async (queryInterface, Sequelize) => queryInterface.removeColumn(
    'TalentTableAboutMes',
    'TalentId',
  )
    .then(queryInterface.removeColumn(
      'TalentRegistrationProficiencies',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentRegistrationEducations',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableApprobations',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableDocuments',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableExperiences',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableEducations',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableSpokenLanguages',
      'TalentId',
    ))
    .then(queryInterface.removeColumn(
      'TalentTableOtherSkills',
      'TalentId',
    ))
  ,

};
