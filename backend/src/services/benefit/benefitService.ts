/**
 * @summary
 * Business logic for Benefit entity.
 * Handles benefit listing operations using in-memory storage.
 *
 * @module services/benefit/benefitService
 */

import { benefitStore } from '@/instances';
import { ServiceError } from '@/utils';
import { BenefitEntity, BenefitListResponse } from './benefitTypes';
import { paramsSchema, typeQuerySchema } from './benefitValidation';

/**
 * @summary
 * Lists all benefits from the in-memory store, optionally filtered by type.
 *
 * @function benefitList
 * @module services/benefit
 *
 * @param {unknown} query - Query parameters (optional type filter)
 * @returns {Promise<BenefitListResponse[]>} List of benefit entities
 *
 * @throws {ServiceError} VALIDATION_ERROR (400) - When query parameters fail validation
 *
 * @example
 * const benefits = await benefitList({});
 * // Returns all 4 benefits
 *
 * const naturalBenefits = await benefitList({ type: 'natural' });
 * // Returns only natural type benefits
 */
export async function benefitList(query: unknown): Promise<BenefitListResponse[]> {
  const validation = typeQuerySchema.safeParse(query);

  if (!validation.success) {
    throw new ServiceError(
      'VALIDATION_ERROR',
      'Invalid query parameters',
      400,
      validation.error.errors
    );
  }

  const { type } = validation.data;
  const records = benefitStore.getAll();

  // Filter by type if provided
  const filteredRecords = type ? records.filter((b) => b.type === type) : records;

  return filteredRecords.map((b) => ({
    id: b.id,
    title: b.title,
    description: b.description,
    icon: b.icon,
    type: b.type,
  }));
}

/**
 * @summary
 * Retrieves a specific benefit by its unique identifier.
 *
 * @function benefitGet
 * @module services/benefit
 *
 * @param {unknown} params - Raw request params containing the ID to validate
 * @returns {Promise<BenefitEntity>} The found benefit entity
 *
 * @throws {ServiceError} VALIDATION_ERROR (400) - When ID parameter is invalid
 * @throws {ServiceError} NOT_FOUND (404) - When benefit with given ID does not exist
 *
 * @example
 * const benefit = await benefitGet({ id: '1' });
 * // Returns: { id: 1, title: 'Produtos 100% Naturais', ... }
 */
export async function benefitGet(params: unknown): Promise<BenefitEntity> {
  const validation = paramsSchema.safeParse(params);

  if (!validation.success) {
    throw new ServiceError('VALIDATION_ERROR', 'Invalid ID', 400, validation.error.errors);
  }

  const { id } = validation.data;
  const record = benefitStore.getById(id);

  if (!record) {
    throw new ServiceError('NOT_FOUND', 'Benefit not found', 404);
  }

  return record as BenefitEntity;
}
