import Koa from 'koa';
import cors from '@koa/cors';
import dotenv from 'dotenv';
dotenv.config();

const app = new Koa();

const corsOptions = {
  origin: process.env.PATH_TO_APP || 'http://localhost:3000',
}

app.use(cors(corsOptions));

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 server listening on http://localhost:${PORT}`);
})
