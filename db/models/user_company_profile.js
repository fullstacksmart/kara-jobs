'use strict';
const {
  Model
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
  };
  user_company_profile.init({
    company_about_text: DataTypes.STRING,
    company_offer_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_company_profile',
  });
  return user_company_profile;
};