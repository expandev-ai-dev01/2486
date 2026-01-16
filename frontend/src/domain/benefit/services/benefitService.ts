/**
 * @service Benefit Service
 * @domain benefit
 * @type REST API
 */

import { publicClient } from '@/core/lib/api';
import type { Benefit, BenefitListParams } from '../types/models';

export const benefitService = {
  /**
   * List all benefits with optional type filter
   */
  async list(params?: BenefitListParams): Promise<Benefit[]> {
    const { data } = await publicClient.get<{ success: boolean; data: Benefit[] }>('/benefit', {
      params,
    });
    return data.data;
  },

  /**
   * Get a single benefit by ID
   */
  async getById(id: number): Promise<Benefit> {
    const { data } = await publicClient.get<{ success: boolean; data: Benefit }>(`/benefit/${id}`);
    return data.data;
  },
};
