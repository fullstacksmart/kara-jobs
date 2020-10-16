import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export const db = new Sequelize({
  database: process.env.DEV_POSTGRES_DATABASE,
  username: process.env.DEV_POSTGRES_USER,
  password: process.env.DEV_POSTGRES_PASSWORD,
  dialect: 'postgres',
  models: [path.join(__dirname, 'models/Talent')],
});

// Person.hasOne(Hobby, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// });
// Hobby.belongsTo(Person);
