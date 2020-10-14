const {
  Model,
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
  }
  user_company_image_gallery.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user_company_image_gallery',
  });
  return user_company_image_gallery;
};
