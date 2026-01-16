/**
 * @summary
 * Business logic for Product entity.
 * Handles product listing operations using in-memory storage.
 *
 * @module services/product/productService
 */

import { productStore } from '@/instances';
import { ServiceError } from '@/utils';
import { ProductEntity, ProductListResponse } from './productTypes';
import { paramsSchema, categoryQuerySchema } from './productValidation';

/**
 * @summary
 * Lists all products from the in-memory store, optionally filtered by category.
 *
 * @function productList
 * @module services/product
 *
 * @param {unknown} query - Query parameters (optional category filter)
 * @returns {Promise<ProductListResponse[]>} List of product entities
 *
 * @throws {ServiceError} VALIDATION_ERROR (400) - When query parameters fail validation
 *
 * @example
 * const products = await productList({});
 * // Returns all 8 products
 *
 * const teas = await productList({ category: 'medicinal_teas' });
 * // Returns only medicinal teas products
 */
export async function productList(query: unknown): Promise<ProductListResponse[]> {
  const validation = categoryQuerySchema.safeParse(query);

  if (!validation.success) {
    throw new ServiceError(
      'VALIDATION_ERROR',
      'Invalid query parameters',
      400,
      validation.error.errors
    );
  }

  const { category } = validation.data;
  const records = productStore.getAll();

  // Filter by category if provided
  const filteredRecords = category ? records.filter((p) => p.category === category) : records;

  return filteredRecords.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    benefits: p.benefits,
    category: p.category,
    imageUrl: p.imageUrl,
  }));
}

/**
 * @summary
 * Retrieves a specific product by its unique identifier.
 *
 * @function productGet
 * @module services/product
 *
 * @param {unknown} params - Raw request params containing the ID to validate
 * @returns {Promise<ProductEntity>} The found product entity
 *
 * @throws {ServiceError} VALIDATION_ERROR (400) - When ID parameter is invalid
 * @throws {ServiceError} NOT_FOUND (404) - When product with given ID does not exist
 *
 * @example
 * const product = await productGet({ id: '1' });
 * // Returns: { id: 1, name: 'Chá de Camomila', ... }
 */
export async function productGet(params: unknown): Promise<ProductEntity> {
  const validation = paramsSchema.safeParse(params);

  if (!validation.success) {
    throw new ServiceError('VALIDATION_ERROR', 'Invalid ID', 400, validation.error.errors);
  }

  const { id } = validation.data;
  const record = productStore.getById(id);

  if (!record) {
    throw new ServiceError('NOT_FOUND', 'Product not found', 404);
  }

  return record as ProductEntity;
}
