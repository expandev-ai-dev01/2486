/**
 * @service Product Service
 * @domain product
 * @type REST API
 */

import { publicClient } from '@/core/lib/api';
import type { Product, ProductListParams } from '../types/models';

export const productService = {
  /**
   * List all products with optional category filter
   */
  async list(params?: ProductListParams): Promise<Product[]> {
    const { data } = await publicClient.get<{ success: boolean; data: Product[] }>('/product', {
      params,
    });
    return data.data;
  },

  /**
   * Get a single product by ID
   */
  async getById(id: number): Promise<Product> {
    const { data } = await publicClient.get<{ success: boolean; data: Product }>(`/product/${id}`);
    return data.data;
  },
};
