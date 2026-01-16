/**
 * @summary
 * Centralized constants exports.
 * Provides single import point for all application constants.
 *
 * @module constants
 */

/**
 * Product constants
 */
export {
  PRODUCT_CATEGORIES,
  PRODUCT_LIMITS,
  PRODUCT_DEFAULTS,
  type ProductCategoriesType,
  type ProductLimitsType,
  type ProductDefaultsType,
  type ProductCategory,
} from './product';

/**
 * Benefit constants
 */
export {
  BENEFIT_TYPES,
  BENEFIT_LIMITS,
  BENEFIT_DEFAULTS,
  type BenefitTypesType,
  type BenefitLimitsType,
  type BenefitDefaultsType,
  type BenefitType,
} from './benefit';

/**
 * Contact constants
 */
export { CONTACT_LIMITS, type ContactLimitsType } from './contact';
