const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_talent_registration_education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_talent_registration_education.init({
    study_program: DataTypes.STRING,
    university: DataTypes.STRING,
    expected_graduation_year: DataTypes.DECIMAL(4, 0),
  }, {
    sequelize,
    modelName: 'user_talent_registration_education',
  });
  return user_talent_registration_education;
};
