const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompanyTalentSearchPreference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyTalentSearchPreference.init({
    search_doctor: DataTypes.BOOLEAN,
    search_nurse: DataTypes.BOOLEAN,
    search_other: DataTypes.BOOLEAN,
    search_talent_study_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    search_talent_approb_status: DataTypes.BOOLEAN,
    search_status_min_german: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'CompanyTalentSearchPreference',
  });
  return CompanyTalentSearchPreference;
};
