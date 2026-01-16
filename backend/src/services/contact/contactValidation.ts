/**
 * @summary
 * Validation schemas for Contact entity.
 * Centralizes all Zod validation logic for the service.
 *
 * @module services/contact/contactValidation
 */

import { z } from 'zod';
import { CONTACT_LIMITS } from '@/constants';

/**
 * Schema for contact creation validation
 */
export const createSchema = z.object({
  name: z.string().min(CONTACT_LIMITS.NAME_MIN_LENGTH).max(CONTACT_LIMITS.NAME_MAX_LENGTH),
  email: z.string().email().max(CONTACT_LIMITS.EMAIL_MAX_LENGTH),
  phone: z.string().max(CONTACT_LIMITS.PHONE_MAX_LENGTH).nullable().optional(),
});

/**
 * Inferred types from schemas
 */
export type CreateInput = z.infer<typeof createSchema>;
