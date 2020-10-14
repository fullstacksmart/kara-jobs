const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_talent_table_about_me extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_talent_table_about_me.init({
    about_me_text: DataTypes.STRING(800),
    sequelize,
    modelName: 'talent_table_about_me',
  });
  return user_talent_table_about_me;
};
