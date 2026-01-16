/**
 * @summary
 * Type definitions for Product entity.
 *
 * @module services/product/productTypes
 */

import { ProductCategory } from '@/constants';

/**
 * @interface ProductEntity
 * @description Represents a product entity in the HORTelã catalog
 *
 * @property {number} id - Unique product identifier
 * @property {string} name - Product name
 * @property {string|null} description - Product description (nullable)
 * @property {string|null} benefits - Product benefits description (nullable)
 * @property {ProductCategory} category - Product category
 * @property {string|null} imageUrl - Product image URL (nullable)
 * @property {string} dateCreated - ISO 8601 timestamp of creation
 * @property {string} dateModified - ISO 8601 timestamp of last modification
 */
export interface ProductEntity {
  id: number;
  name: string;
  description: string | null;
  benefits: string | null;
  category: ProductCategory;
  imageUrl: string | null;
  dateCreated: string;
  dateModified: string;
}

/**
 * @interface ProductListResponse
 * @description Response structure for listing products
 *
 * @property {number} id - Unique product identifier
 * @property {string} name - Product name
 * @property {string|null} description - Product description (nullable)
 * @property {string|null} benefits - Product benefits description (nullable)
 * @property {ProductCategory} category - Product category
 * @property {string|null} imageUrl - Product image URL (nullable)
 */
export interface ProductListResponse {
  id: number;
  name: string;
  description: string | null;
  benefits: string | null;
  category: ProductCategory;
  imageUrl: string | null;
}
