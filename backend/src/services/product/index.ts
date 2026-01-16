/**
 * @summary
 * Centralized exports for Product service.
 *
 * @module services/product
 */

export * from './productTypes';
export * from './productService';
export {
  paramsSchema as productParamsSchema,
  categoryQuerySchema,
  type ParamsInput as ProductParamsInput,
  type CategoryQueryInput,
} from './productValidation';
