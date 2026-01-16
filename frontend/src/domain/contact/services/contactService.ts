/**
 * @service Contact Service
 * @domain contact
 * @type REST API
 */

import { publicClient } from '@/core/lib/api';
import type { ContactResponse } from '../types/models';
import type { ContactFormOutput } from '../validations/contact';

export const contactService = {
  /**
   * Create a new contact submission
   */
  async create(data: ContactFormOutput): Promise<ContactResponse> {
    const { data: response } = await publicClient.post<{ success: boolean; data: ContactResponse }>(
      '/contact',
      data
    );
    return response.data;
  },
};
