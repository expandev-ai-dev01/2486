/**
 * @summary
 * Centralized service instances exports.
 * Provides single import point for all service configurations and instances.
 *
 * @module instances
 */

/**
 * Product instances
 */
export { productStore, type ProductRecord } from './product';

/**
 * Benefit instances
 */
export { benefitStore, type BenefitRecord } from './benefit';
