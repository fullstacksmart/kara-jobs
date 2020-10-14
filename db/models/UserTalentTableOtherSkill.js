const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentTableOtherSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TalentTableOtherSkill.init({
    talent_skill: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'talent_table_other_skills',
  });
  return TalentTableOtherSkill;
};
