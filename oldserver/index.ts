import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
// import authMiddleware from './firebase/auth-middleware';
const PORT = 3001 || process.env.SERVER_PORT;

const app = express();

// app.use('/', authMiddleware);

app.use(cors({
  origin: process.env.PATH_TO_APP
}));

app.listen(PORT, () => {
  console.log(`🚀 server listening on http://localhost:${PORT}`)
});
