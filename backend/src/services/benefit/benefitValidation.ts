/**
 * @summary
 * Validation schemas for Benefit entity.
 * Centralizes all Zod validation logic for the service.
 *
 * @module services/benefit/benefitValidation
 */

import { z } from 'zod';
import { BENEFIT_TYPES } from '@/constants';

/**
 * Schema for ID parameter validation
 */
export const paramsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

/**
 * Schema for type query parameter validation
 */
export const typeQuerySchema = z.object({
  type: z
    .enum([
      BENEFIT_TYPES.NATURAL,
      BENEFIT_TYPES.HEALTH,
      BENEFIT_TYPES.SUSTAINABILITY,
      BENEFIT_TYPES.PREMIUM,
    ])
    .optional(),
});

/**
 * Inferred types from schemas
 */
export type ParamsInput = z.infer<typeof paramsSchema>;
export type TypeQueryInput = z.infer<typeof typeQuerySchema>;
