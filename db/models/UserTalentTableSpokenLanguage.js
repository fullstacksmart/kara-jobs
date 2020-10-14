const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTalentTableSpokenLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTalentTableSpokenLanguage.init({
    spoken_language: DataTypes.STRING,
    spoken_language_proficiency: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'talent_table_spoken_language',
  });
  return UserTalentTableSpokenLanguage;
};
