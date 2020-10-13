'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_company_image_gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_company_image_gallery.init({
    image_id: DataTypes.BIGINT,
    image_title: DataTypes.STRING,
    profile_image: DataTypes.BOOLEAN,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_company_image_gallery',
  });
  return user_company_image_gallery;
};