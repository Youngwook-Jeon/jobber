import { Logger } from 'winston';
import mongoose from 'mongoose';
import { winstonLogger } from '@youngwook-jeon/jobber-shared';
import { config } from '@user/config';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'userDatabaseServer', 'debug');

const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.DATABASE_URL}`);
    log.info('User service successfully connected to database.');
  } catch (error) {
    log.log('error', 'UserService databaseConnection() method error:', error);
  }
};

export { databaseConnection };
