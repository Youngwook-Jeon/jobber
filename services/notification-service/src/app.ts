import express from 'express';
import { winstonLogger } from '@youngwook-jeon/jobber-shared';

import { config } from '@notifications/config';
import { start } from '@notifications/server';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationApp', 'debug');

function initialize(): void {
  const app = express();
  start(app);
  log.info('Notification service initialized.');
}

initialize();
