import Koa from 'koa';
import cors from '@koa/cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes';
import db from '../db/models/index';
// the following is needed for the config.js file to be copied to dist/db folder
// by the ts compiler automatically
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as dbConfig from '../db/config/config.js';

const app = new Koa();

const PORT = process.env.SERVER_PORT || 3001;
const corsOptions = {
  origin: process.env.PATH_TO_APP || 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(router.routes()).use(router.allowedMethods());

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      '🔌 connection to db has been established successfully',
    );
  } catch (error) {
    console.error(
      `there was a problem connecting to the db: ${error.message}`,
    );
    return;
  }
  app.listen(PORT, () => {
    console.log(`🚀 server listening on http://localhost:${PORT}`);
  });
})();
