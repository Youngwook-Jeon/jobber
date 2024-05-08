import express, { Router } from 'express';
import { health } from '@gig/controllers/health';

const router: Router = express.Router();

const healthRoutes = (): Router => {
  router.get('/gig-health', health);

  return router;
};

export { healthRoutes };
