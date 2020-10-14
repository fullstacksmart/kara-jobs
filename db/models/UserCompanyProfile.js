const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompanyProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyProfile.init({
    company_about_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_offer_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CompanyProfile',
  });
  return CompanyProfile;
};
