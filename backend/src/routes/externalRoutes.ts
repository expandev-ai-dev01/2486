/**
 * @summary
 * External API routes configuration.
 * Handles public endpoints that don't require authentication.
 *
 * @module routes/externalRoutes
 */

import { Router } from 'express';
import * as productController from '@/api/external/product/controller';
import * as benefitController from '@/api/external/benefit/controller';
import * as contactController from '@/api/external/contact/controller';

const router = Router();

/**
 * @rule {be-route-configuration}
 * Product routes - /api/external/product
 */
router.get('/product', productController.listHandler);
router.get('/product/:id', productController.getHandler);

/**
 * @rule {be-route-configuration}
 * Benefit routes - /api/external/benefit
 */
router.get('/benefit', benefitController.listHandler);
router.get('/benefit/:id', benefitController.getHandler);

/**
 * @rule {be-route-configuration}
 * Contact routes - /api/external/contact
 */
router.post('/contact', contactController.createHandler);

export default router;
