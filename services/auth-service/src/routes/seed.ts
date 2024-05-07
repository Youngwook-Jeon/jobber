import express, { Router } from 'express';
import { create } from '@auth/controllers/seed';

const router: Router = express.Router();

export function seedRoutes(): Router {
  router.put('/seed/:count', create);

  return router;
}
