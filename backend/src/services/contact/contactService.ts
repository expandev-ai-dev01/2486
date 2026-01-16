/**
 * @summary
 * Business logic for Contact entity.
 * Handles contact form submission using in-memory storage.
 * Sends confirmation email after successful contact creation.
 *
 * @module services/contact/contactService
 */

import { contactStore } from '@/instances';
import { ServiceError } from '@/utils';
import { sendConfirmationEmail } from '@/services/email';
import { ContactCreateResponse } from './contactTypes';
import { createSchema } from './contactValidation';

/**
 * @summary
 * Creates a new contact submission with validated data.
 * Sends confirmation email to the contact after successful creation.
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

  /**
   * @rule {be-email-confirmation}
   * Send confirmation email after successful contact creation
   */
  try {
    await sendConfirmationEmail({
      recipientName: params.name,
      recipientEmail: params.email,
    });
  } catch (emailError: any) {
    // Log email error but don't fail the contact creation
    console.error('Failed to send confirmation email:', emailError);
    // Contact was created successfully, email failure is non-critical
  }

  return {
    message: 'Obrigado! Entraremos em contato em breve',
  };
}
