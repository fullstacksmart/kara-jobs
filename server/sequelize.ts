import { Sequelize } from 'sequelize-typescript';
import { Person } from './models/Person';
import { Hobby } from './models/Hobby';

export const db = new Sequelize({
  database: 'tsTest',
  username: process.env.DEV_POSTGRES_USER,
  password: process.env.DEV_POSTGRES_PASSWORD,
  dialect: 'postgres',
  models: [__dirname + '/models'],
});

// Person.hasOne(Hobby, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// });
// Hobby.belongsTo(Person);
