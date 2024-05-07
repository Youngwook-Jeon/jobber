import express, { Express } from 'express';
import { databaseConnection } from '@user/database';
import { config } from '@user/config';
import { start } from '@user/server';

const initilize = (): void => {
  config.cloudinaryConfig();
  databaseConnection();
  const app: Express = express();
  start(app);
};

initilize();
