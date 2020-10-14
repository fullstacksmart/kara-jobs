const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTalentRegistrationProficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTalentRegistrationProficiency.init({
    occupation_id: {
      type: DataTypes.DECIMAL(1, 0),
      allowNull: false,
    },
    position_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation_status_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    employer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserTalentRegistrationProficiency',
  });
  return UserTalentRegistrationProficiency;
};
