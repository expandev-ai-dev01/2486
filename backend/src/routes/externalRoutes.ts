/**
 * @summary
 * External API routes configuration.
 * Handles public endpoints that don't require authentication.
 *
 * @module routes/externalRoutes
 */

import { Router } from 'express';
import * as productController from '@/api/external/product/controller';

const router = Router();

/**
 * @rule {be-route-configuration}
 * Product routes - /api/external/product
 */
router.get('/product', productController.listHandler);
router.get('/product/:id', productController.getHandler);

export default router;
