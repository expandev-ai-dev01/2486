/**
 * @summary
 * Business logic for Contact entity.
 * Handles contact form submission using in-memory storage.
 *
 * @module services/contact/contactService
 */

import { contactStore } from '@/instances';
import { ServiceError } from '@/utils';
import { ContactCreateResponse } from './contactTypes';
import { createSchema } from './contactValidation';

/**
 * @summary
 * Creates a new contact submission with validated data.
 *
 * @function contactCreate
 * @module services/contact
 *
 * @param {unknown} body - Raw request body to validate against createSchema
 * @returns {Promise<ContactCreateResponse>} Confirmation message
 *
 * @throws {ServiceError} VALIDATION_ERROR (400) - When body fails schema validation
 *
 * @example
 * const result = await contactCreate({
 *   name: 'João Silva',
 *   email: 'joao@example.com',
 *   phone: '11999999999'
 * });
 * // Returns: { message: 'Obrigado! Entraremos em contato em breve' }
 */
export async function contactCreate(body: unknown): Promise<ContactCreateResponse> {
  const validation = createSchema.safeParse(body);

  if (!validation.success) {
    throw new ServiceError('VALIDATION_ERROR', 'Validation failed', 400, validation.error.errors);
  }

  const params = validation.data;
  const now = new Date().toISOString();
  const id = contactStore.getNextId();

  const newContact = {
    id,
    name: params.name,
    email: params.email,
    phone: params.phone || null,
    dateCreated: now,
  };

  contactStore.add(newContact);

  return {
    message: 'Obrigado! Entraremos em contato em breve',
  };
}
