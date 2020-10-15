const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TalentTableExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TalentTableExperience.belongsTo(models.Talent);
    }
  }
  TalentTableExperience.init({
    position_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employer_country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employer_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position_start_month: {
      type: DataTypes.DECIMAL(2, 0),
      allowNull: false,
    },
    position_start_year: {
      type: DataTypes.DECIMAL(4, 0),
      allowNull: false,
    },
    position_end_month: DataTypes.DECIMAL(2, 0),
    position_end_year: DataTypes.DECIMAL(4, 0),
    position_description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'talent_table_experience',
  });
  return TalentTableExperience;
};
