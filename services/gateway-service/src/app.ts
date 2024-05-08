import express from 'express';
import { GatewayServer } from '@gateway/server';
import { redisConnection } from '@gateway/redis/redis.connection';

class Application {
  public initialize(): void {
    const app = express();
    const server = new GatewayServer(app);
    server.start();
    redisConnection.redisConnect();
  }
}

const application = new Application();
application.initialize();
