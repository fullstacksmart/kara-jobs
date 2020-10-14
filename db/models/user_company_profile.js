const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_company_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_company_profile.init({
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
    modelName: 'user_company_profile',
  });
  return user_company_profile;
};
