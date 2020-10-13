import Koa from 'koa';
import cors from '@koa/cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes';
import sequelize from './models/index';

const app = new Koa();

const PORT = process.env.SERVER_PORT || 3001;
const corsOptions = {
  origin: process.env.PATH_TO_APP || 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(router.routes()).use(router.allowedMethods());

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      '🔌 connection to db has been established successfully',
    );
  } catch (error) {
    console.error(
      `there was a problem connecting to the db: ${error.message}`,
    );
  }
  app.listen(PORT, () => {
    console.log(`🚀 server listening on http://localhost:${PORT}`);
  });
})();
