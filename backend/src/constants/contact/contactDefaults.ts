/**
 * @summary
 * Default values and constants for Contact entity.
 * Provides centralized configuration for contact form validation limits.
 *
 * @module constants/contact/contactDefaults
 */

/**
 * @interface ContactLimitsType
 * @description Validation constraints for Contact entity fields.
 *
 * @property {number} NAME_MIN_LENGTH - Minimum characters for name field (1)
 * @property {number} NAME_MAX_LENGTH - Maximum characters for name field (200)
 * @property {number} EMAIL_MAX_LENGTH - Maximum characters for email field (100)
 * @property {number} PHONE_MAX_LENGTH - Maximum characters for phone field (20)
 */
export const CONTACT_LIMITS = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 200,
  EMAIL_MAX_LENGTH: 100,
  PHONE_MAX_LENGTH: 20,
} as const;

/** Type representing the CONTACT_LIMITS constant */
export type ContactLimitsType = typeof CONTACT_LIMITS;
