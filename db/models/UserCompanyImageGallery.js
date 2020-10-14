const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompanyImageGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CompanyImageGallery.belongsTo(models.Company);
    }
  }
  CompanyImageGallery.init({
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
    modelName: 'CompanyImageGallery',
  });
  return CompanyImageGallery;
};
