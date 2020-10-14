const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Talent.hasOne(models.TalentRegistrationProficiency);
      Talent.hasOne(models.TalentRegistrationEducation);
      Talent.hasMany(models.TalentTableApprobation);
      Talent.hasMany(models.TalentTableDocument);
      Talent.hasOne(models.TalentTableAboutMe);
      Talent.hasMany(models.TalentTableExperience);
      Talent.hasMany(models.TalentTableEducation);
      Talent.hasMany(models.TalentTableSpokenLanguage);
      Talent.hasMany(models.TalentTableOtherSkill);
    }
  }
  Talent.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iso_code: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    residence: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.DECIMAL(8, 0),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    onboarding_complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    onboarding_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Talent',
  });
  return Talent;
};
