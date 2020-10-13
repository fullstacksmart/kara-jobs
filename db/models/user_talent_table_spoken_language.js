'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_talent_table_spoken_language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  talent_table_spoken_language.init({
    spoken_language: DataTypes.STRING,
    spoken_language_proficiency: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'talent_table_spoken_language',
  });
  return user_talent_table_spoken_language;
};
