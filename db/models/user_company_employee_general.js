'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_company_employee_general extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_company_employee_general.init({
    employee_id: DataTypes.BIGINT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    onboarding_complete: DataTypes.BOOLEAN,
    onboarding_page: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'user_company_employee_general',
  });
  return user_company_employee_general;
};
