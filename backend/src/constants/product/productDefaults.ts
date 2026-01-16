/**
 * @summary
 * Default values and constants for Product entity.
 * Provides centralized configuration for product categories and limits.
 *
 * @module constants/product/productDefaults
 */

/**
 * @interface ProductCategoriesType
 * @description Available product categories for HORTelã natural products.
 *
 * @property {string} MEDICINAL_TEAS - Medicinal teas category ('medicinal_teas')
 * @property {string} SPICES_CONDIMENTS - Spices and condiments category ('spices_condiments')
 * @property {string} AROMATIC_PLANTS - Aromatic plants category ('aromatic_plants')
 * @property {string} ESSENTIAL_OILS - Essential oils category ('essential_oils')
 */
export const PRODUCT_CATEGORIES = {
  MEDICINAL_TEAS: 'medicinal_teas',
  SPICES_CONDIMENTS: 'spices_condiments',
  AROMATIC_PLANTS: 'aromatic_plants',
  ESSENTIAL_OILS: 'essential_oils',
} as const;

/** Type representing the PRODUCT_CATEGORIES constant */
export type ProductCategoriesType = typeof PRODUCT_CATEGORIES;

/** Union type of all valid category values */
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];

/**
 * @interface ProductLimitsType
 * @description Validation constraints for Product entity fields.
 *
 * @property {number} NAME_MIN_LENGTH - Minimum characters for name field (1)
 * @property {number} NAME_MAX_LENGTH - Maximum characters for name field (200)
 * @property {number} DESCRIPTION_MAX_LENGTH - Maximum characters for description field (500)
 * @property {number} BENEFITS_MAX_LENGTH - Maximum characters for benefits field (1000)
 * @property {number} IMAGE_URL_MAX_LENGTH - Maximum characters for image URL (500)
 */
export const PRODUCT_LIMITS = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 200,
  DESCRIPTION_MAX_LENGTH: 500,
  BENEFITS_MAX_LENGTH: 1000,
  IMAGE_URL_MAX_LENGTH: 500,
} as const;

/** Type representing the PRODUCT_LIMITS constant */
export type ProductLimitsType = typeof PRODUCT_LIMITS;

/**
 * @interface ProductDefaultsType
 * @description Default configuration values for Product entity.
 *
 * @property {number} MAX_PRODUCTS_PER_CATEGORY - Maximum products per category (2)
 * @property {number} TOTAL_PRODUCTS_DISPLAY - Total products to display (8)
 */
export const PRODUCT_DEFAULTS = {
  MAX_PRODUCTS_PER_CATEGORY: 2,
  TOTAL_PRODUCTS_DISPLAY: 8,
} as const;

/** Type representing the PRODUCT_DEFAULTS constant */
export type ProductDefaultsType = typeof PRODUCT_DEFAULTS;
