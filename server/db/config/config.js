const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_POSTGRES_USER,
    password: process.env.DEV_POSTGRES_PASSWORD,
    database: process.env.DEV_POSTGRES_DATABASE,
    host: process.env.DEV_POSTGRES_HOST,
    port: process.env.DEV_POSTGRES_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_POSTGRES_USER,
    password: process.env.TEST_POSTGRES_PASSWORD,
    database: process.env.DEV_POSTGRES_DATABASE,
    host: process.env.TEST_POSTGRES_HOST,
    port: process.env.TEST_POSTGRES_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_POSTGRES_USER,
    password: process.env.PROD_POSTGRES_PASSWORD,
    database: process.env.PROD_POSTGRES_DATABASE,
    host: process.env.PROD_POSTGRES_HOST,
    port: process.env.PROD_POSTGRES_PORT,
    dialect: 'postgres',
  },
};
