const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.CompanyEmployee);
      Company.hasMany(models.CompanyImageGallery);
      Company.hasOne(models.CompanySearchPreference);
      Company.hasOne(models.CompanyRecruitmentPreference);
      Company.hasOne(models.CompanyProfile);
    }
  }
  Company.init({
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_street_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company_address_additional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company_zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
