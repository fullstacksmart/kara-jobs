const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentTableSpokenLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TalentTableSpokenLanguage.belongsTo(models.Talent);
    }
  }
  TalentTableSpokenLanguage.init({
    spoken_language: DataTypes.STRING,
    spoken_language_proficiency: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'talent_table_spoken_language',
  });
  return TalentTableSpokenLanguage;
};
