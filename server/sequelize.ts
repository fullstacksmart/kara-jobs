import { Sequelize } from 'sequelize-typescript';

export const db = new Sequelize({
  database: process.env.DEV_POSTGRES_DATABASE,
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
