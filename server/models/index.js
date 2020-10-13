import { Sequelize } from 'sequelize';

const sequelizeOptions = {
  host: 'localhost',
  dialect: 'postgres',
  database: 'kara',
};

const sequelize = new Sequelize(sequelizeOptions);

export default sequelize;
