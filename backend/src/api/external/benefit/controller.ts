/**
 * @summary
 * API controller for Benefit entity (external/public endpoints).
 * Thin layer that delegates all logic to service.
 *
 * @module api/external/benefit/controller
 */

import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, isServiceError } from '@/utils';
import { benefitList, benefitGet } from '@/services/benefit';

/**
 * @api {get} /api/external/benefit List Benefits
 * @apiName ListBenefits
 * @apiGroup Benefit
 *
 * @apiQuery {String} [type] Optional type filter (natural | health | sustainability | premium)
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {Object[]} data List of benefits
 * @apiSuccess {Number} data.id Unique identifier
 * @apiSuccess {String} data.title Benefit title
 * @apiSuccess {String} data.description Benefit description
 * @apiSuccess {String} data.icon Icon identifier
 * @apiSuccess {String} data.type Benefit type (natural | health | sustainability | premium)
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code (VALIDATION_ERROR)
 * @apiError {String} error.message Error message
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await benefitList(req.query);
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
 * @api {get} /api/external/benefit/:id Get Benefit
 * @apiName GetBenefit
 * @apiGroup Benefit
 *
 * @apiParam {Number} id Benefit ID
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {Number} data.id Unique identifier
 * @apiSuccess {String} data.title Benefit title
 * @apiSuccess {String} data.description Benefit description
 * @apiSuccess {String} data.icon Icon identifier
 * @apiSuccess {String} data.type Benefit type (natural | health | sustainability | premium)
 * @apiSuccess {String} data.dateCreated ISO 8601 timestamp
 * @apiSuccess {String} data.dateModified ISO 8601 timestamp
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code (NOT_FOUND | VALIDATION_ERROR)
 * @apiError {String} error.message Error message
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await benefitGet(req.params);
    res.json(successResponse(data));
  } catch (error) {
    if (isServiceError(error)) {
      res.status(error.statusCode).json(errorResponse(error.message, error.code, error.details));
      return;
    }
    next(error);
  }
}
