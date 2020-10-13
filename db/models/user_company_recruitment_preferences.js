'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_company_recruitment_preferences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_company_recruitment_preferences.init({
    receive_initiative_application: DataTypes.BOOLEAN,
    offer_approb_training: DataTypes.BOOLEAN,
    receive_international_application: DataTypes.BOOLEAN,
    receive_agency_application: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_company_recruitment_preferences',
  });
  return user_company_recruitment_preferences;
};