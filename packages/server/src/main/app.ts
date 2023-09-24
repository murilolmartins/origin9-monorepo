import { AppRoutes } from './routes';

import cors from 'cors';
import type { Application } from 'express';
import express from 'express';
import morgan from 'morgan';

const buildApp = (): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use(morgan('dev'));

  AppRoutes(app);

  app.get('/healthcheck', async () => {
    return { status: 'ok' };
  });

  return app;
};

export { buildApp };
