const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_talent_table_approbation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  talent_table_approbation.init({
    approbation_started: DataTypes.BOOLEAN,
    approbation_federal_state: DataTypes.STRING,
    approbation_feedback: DataTypes.BOOLEAN,
    approbation_status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'talent_table_approbation',
  });
  return user_talent_table_approbation;
};
