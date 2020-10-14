const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompanyRecruitmentPreference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyRecruitmentPreference.init({
    receive_initiative_application: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    offer_approb_training: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    receive_international_application: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    receive_agency_application: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CompanyRecruitmentPreference',
  });
  return CompanyRecruitmentPreference;
};
