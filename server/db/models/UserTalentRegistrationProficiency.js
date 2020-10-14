const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentRegistrationProficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TalentRegistrationProficiency.belongsTo(models.Talent);
    }
  }
  TalentRegistrationProficiency.init({
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
    modelName: 'TalentRegistrationProficiency',
  });
  return TalentRegistrationProficiency;
};
