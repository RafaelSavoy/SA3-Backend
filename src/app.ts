import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './router';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export { app };
