const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentRegistrationEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TalentRegistrationEducation.belongsTo(models.Talent);
    }
  }
  TalentRegistrationEducation.init({
    study_program: DataTypes.STRING,
    university: DataTypes.STRING,
    expected_graduation_year: DataTypes.DECIMAL(4, 0),
  }, {
    sequelize,
    modelName: 'TalentRegistrationEducation',
  });
  return TalentRegistrationEducation;
};
