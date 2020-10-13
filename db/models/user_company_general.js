'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_company_general extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_company_general.init({
    company_name: DataTypes.STRING,
    company_sector: DataTypes.STRING,
    company_type: DataTypes.STRING,
    company_street: DataTypes.STRING,
    company_street_no: DataTypes.STRING,
    company_address_additional: DataTypes.STRING,
    company_zip_code: DataTypes.STRING,
    company_city: DataTypes.STRING,
    company_website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_company_general',
  });
  return user_company_general;
};