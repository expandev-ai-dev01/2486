/**
 * @summary
 * Default values and constants for Benefit entity.
 * Provides centralized configuration for benefit types and limits.
 *
 * @module constants/benefit/benefitDefaults
 */

/**
 * @interface BenefitTypesType
 * @description Available benefit types for HORTelã natural products.
 *
 * @property {string} NATURAL - 100% natural products benefit ('natural')
 * @property {string} HEALTH - Health benefits ('health')
 * @property {string} SUSTAINABILITY - Sustainability benefit ('sustainability')
 * @property {string} PREMIUM - Premium quality benefit ('premium')
 */
export const BENEFIT_TYPES = {
  NATURAL: 'natural',
  HEALTH: 'health',
  SUSTAINABILITY: 'sustainability',
  PREMIUM: 'premium',
} as const;

/** Type representing the BENEFIT_TYPES constant */
export type BenefitTypesType = typeof BENEFIT_TYPES;

/** Union type of all valid benefit type values */
export type BenefitType = (typeof BENEFIT_TYPES)[keyof typeof BENEFIT_TYPES];

/**
 * @interface BenefitLimitsType
 * @description Validation constraints for Benefit entity fields.
 *
 * @property {number} TITLE_MIN_LENGTH - Minimum characters for title field (1)
 * @property {number} TITLE_MAX_LENGTH - Maximum characters for title field (100)
 * @property {number} DESCRIPTION_MAX_LENGTH - Maximum characters for description field (500)
 * @property {number} ICON_MAX_LENGTH - Maximum characters for icon field (50)
 */
export const BENEFIT_LIMITS = {
  TITLE_MIN_LENGTH: 1,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 500,
  ICON_MAX_LENGTH: 50,
} as const;

/** Type representing the BENEFIT_LIMITS constant */
export type BenefitLimitsType = typeof BENEFIT_LIMITS;

/**
 * @interface BenefitDefaultsType
 * @description Default configuration values for Benefit entity.
 *
 * @property {number} TOTAL_BENEFITS_DISPLAY - Total benefits to display (4)
 */
export const BENEFIT_DEFAULTS = {
  TOTAL_BENEFITS_DISPLAY: 4,
} as const;

/** Type representing the BENEFIT_DEFAULTS constant */
export type BenefitDefaultsType = typeof BENEFIT_DEFAULTS;
