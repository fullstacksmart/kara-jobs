'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_talent_table_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  talent_table_experience.init({
    position_name: DataTypes.STRING,
    employer_name: DataTypes.STRING,
    employer_country: DataTypes.STRING,
    employer_city: DataTypes.STRING,
    position_start_month: DataTypes.DECIMAL(2,0),
    position_start_year: DataTypes.DECIMAL(4,0),
    position_end_month: DataTypes.DECIMAL(2,0),
    position_end_year: DataTypes.DECIMAL(4,0),
    position_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'talent_table_experience',
  });
  return user_talent_table_experience;
};
