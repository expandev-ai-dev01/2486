/**
 * @summary
 * API controller for Contact entity (external/public endpoints).
 * Thin layer that delegates all logic to service.
 *
 * @module api/external/contact/controller
 */

import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, isServiceError } from '@/utils';
import { contactCreate } from '@/services/contact';

/**
 * @api {post} /api/external/contact Create Contact
 * @apiName CreateContact
 * @apiGroup Contact
 *
 * @apiBody {String} name Contact name (1-200 chars, required)
 * @apiBody {String} email Contact email (valid email format, required)
 * @apiBody {String} [phone] Contact phone (max 20 chars, optional)
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {String} data.message Confirmation message
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code (VALIDATION_ERROR)
 * @apiError {String} error.message Error message
 */
export async function createHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await contactCreate(req.body);
    res.status(201).json(successResponse(data));
  } catch (error) {
    if (isServiceError(error)) {
      res.status(error.statusCode).json(errorResponse(error.message, error.code, error.details));
      return;
    }
    next(error);
  }
}
