import express, { Router } from 'express';
import { seller as createSeller } from '@user/controllers/seller/create';
import { id, random, username } from '@user/controllers/seller/get';
import { seed } from '@user/controllers/seller/seed';
import { seller as updateSeller } from '@user/controllers/seller/update';

const router: Router = express.Router();

const sellerRoutes = (): Router => {
  router.get('/id/:sellerId', id);
  router.get('/username/:username', username);
  router.get('/random/:size', random);
  router.post('/create', createSeller);
  router.put('/:sellerId', updateSeller);
  router.put('/seed/:count', seed);

  return router;
};

export { sellerRoutes };
