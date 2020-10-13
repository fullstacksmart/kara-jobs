'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_talent_registration_proficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_talent_registration_proficiency.init({
    occupation_id: DataTypes.DECIMAL(1,0),
    position_name: DataTypes.STRING,
    occupation_status_id: DataTypes.DECIMAL,
    employer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_talent_registration_proficiency',
  });
  return user_talent_registration_proficiency;
};
