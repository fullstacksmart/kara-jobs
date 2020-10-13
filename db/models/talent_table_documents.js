'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class talent_table_documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  talent_table_documents.init({
    document_id: DataTypes.INTEGER,
    document_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'talent_table_documents',
  });
  return talent_table_documents;
};