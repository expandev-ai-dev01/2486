/**
 * @summary
 * API controller for Product entity (external/public endpoints).
 * Thin layer that delegates all logic to service.
 *
 * @module api/external/product/controller
 */

import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, isServiceError } from '@/utils';
import { productList, productGet } from '@/services/product';

/**
 * @api {get} /api/external/product List Products
 * @apiName ListProducts
 * @apiGroup Product
 *
 * @apiQuery {String} [category] Optional category filter (medicinal_teas | spices_condiments | aromatic_plants | essential_oils)
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {Object[]} data List of products
 * @apiSuccess {Number} data.id Unique identifier
 * @apiSuccess {String} data.name Product name
 * @apiSuccess {String|null} data.description Product description
 * @apiSuccess {String|null} data.benefits Product benefits
 * @apiSuccess {String} data.category Product category
 * @apiSuccess {String|null} data.imageUrl Product image URL
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code (VALIDATION_ERROR)
 * @apiError {String} error.message Error message
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await productList(req.query);
    res.json(successResponse(data));
  } catch (error) {
    if (isServiceError(error)) {
      res.status(error.statusCode).json(errorResponse(error.message, error.code, error.details));
      return;
    }
    next(error);
  }
}

/**
 * @api {get} /api/external/product/:id Get Product
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {Number} id Product ID
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {Number} data.id Unique identifier
 * @apiSuccess {String} data.name Product name
 * @apiSuccess {String|null} data.description Product description
 * @apiSuccess {String|null} data.benefits Product benefits
 * @apiSuccess {String} data.category Product category
 * @apiSuccess {String|null} data.imageUrl Product image URL
 * @apiSuccess {String} data.dateCreated ISO 8601 timestamp
 * @apiSuccess {String} data.dateModified ISO 8601 timestamp
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code (NOT_FOUND | VALIDATION_ERROR)
 * @apiError {String} error.message Error message
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await productGet(req.params);
    res.json(successResponse(data));
  } catch (error) {
    if (isServiceError(error)) {
      res.status(error.statusCode).json(errorResponse(error.message, error.code, error.details));
      return;
    }
    next(error);
  }
}
