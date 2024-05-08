import { Application } from 'express';
import { verifyGatewayRequest } from '@youngwook-jeon/jobber-shared';
import { healthRoutes } from '@user/routes/health';
import { buyerRoutes } from '@user/routes/buyer';
import { sellerRoutes } from '@user/routes/seller';

const BUYER_BASE_PATH = '/api/v1/buyer';
const SELLER_BASE_PATH = '/api/v1/seller';

const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BUYER_BASE_PATH, verifyGatewayRequest, buyerRoutes());
  app.use(SELLER_BASE_PATH, verifyGatewayRequest, sellerRoutes());
};

export { appRoutes };
