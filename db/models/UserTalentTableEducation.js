const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentTableEducation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TalentTableEducation.init({
    university_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree: DataTypes.STRING,
    field_of_study: DataTypes.STRING,
    study_start_year: DataTypes.DECIMAL(4, 0),
    study_end_year: DataTypes.DECIMAL(4, 0),
    study_description: DataTypes.STRING(500),
  }, {
    sequelize,
    modelName: 'talent_table_education',
  });
  return TalentTableEducation;
};
