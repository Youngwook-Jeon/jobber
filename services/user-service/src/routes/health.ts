import express, { Router } from 'express';
import { health } from '@user/controllers/health';

const router: Router = express.Router();

const healthRoutes = (): Router => {
  router.get('/user-health', health);

  return router;
};

export { healthRoutes };
