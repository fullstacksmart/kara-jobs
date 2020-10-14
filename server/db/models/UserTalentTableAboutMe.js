const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentTableAboutMe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TalentTableAboutMe.belongsTo(models.Talent);
    }
  }
  TalentTableAboutMe.init({
    about_me_text: DataTypes.STRING(800),
    sequelize,
    modelName: 'TalentTableAboutMe',
  });
  return TalentTableAboutMe;
};
