import { Channel } from 'amqplib';
import { Logger } from 'winston';
import { winstonLogger } from '@youngwook-jeon/jobber-shared';
import { config } from '@user/config';
import { createConnection } from '@user/queues/connection';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'userServiceProducer', 'debug');

const publishDirectMessage = async (
  channel: Channel,
  exchangeName: string,
  routingKey: string,
  message: string,
  logMessage: string
): Promise<void> => {
  try {
    if (!channel) {
      channel = (await createConnection()) as Channel;
    }
    await channel.assertExchange(exchangeName, 'direct');
    channel.publish(exchangeName, routingKey, Buffer.from(message));
    log.info(logMessage);
  } catch (error) {
    log.log('error', 'UserService publishDirectMessage() method error:', error);
  }
};

export { publishDirectMessage };
