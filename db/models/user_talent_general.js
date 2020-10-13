const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_talent_general extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_talent_general.init({
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    iso_code: DataTypes.STRING(2),
    residence: DataTypes.STRING,
    zip_code: DataTypes.DECIMAL(8, 0),
    city: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user_talent_general',
  });
  return user_talent_general;
};
