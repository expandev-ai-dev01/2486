/**
 * @summary
 * Validation schemas for Product entity.
 * Centralizes all Zod validation logic for the service.
 *
 * @module services/product/productValidation
 */

import { z } from 'zod';
import { PRODUCT_LIMITS, PRODUCT_CATEGORIES } from '@/constants';

/**
 * Schema for ID parameter validation
 */
export const paramsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

/**
 * Schema for category query parameter validation
 */
export const categoryQuerySchema = z.object({
  category: z
    .enum([
      PRODUCT_CATEGORIES.MEDICINAL_TEAS,
      PRODUCT_CATEGORIES.SPICES_CONDIMENTS,
      PRODUCT_CATEGORIES.AROMATIC_PLANTS,
      PRODUCT_CATEGORIES.ESSENTIAL_OILS,
    ])
    .optional(),
});

/**
 * Inferred types from schemas
 */
export type ParamsInput = z.infer<typeof paramsSchema>;
export type CategoryQueryInput = z.infer<typeof categoryQuerySchema>;
