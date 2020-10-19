import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export const db = new Sequelize({
  database: process.env.DEV_POSTGRES_DATABASE,
  username: process.env.DEV_POSTGRES_USER,
  password: process.env.DEV_POSTGRES_PASSWORD,
  dialect: 'postgres',
  //logging: false,
  models: [
    path.join(__dirname, 'models', 'Talent'),
    path.join(__dirname, 'models', 'Company'),
  ],
});

// Person.hasOne(Hobby, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// });
// Hobby.belongsTo(Person);
