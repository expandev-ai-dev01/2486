/**
 * @summary
 * Centralized exports for Contact service.
 *
 * @module services/contact
 */

export * from './contactTypes';
export * from './contactService';
export {
  createSchema as contactCreateSchema,
  type CreateInput as ContactCreateInput,
} from './contactValidation';
