/**
 * @summary
 * In-memory store instance for Product entity.
 * Provides singleton pattern for data storage with pre-seeded products.
 *
 * @module instances/product/productStore
 */

import { PRODUCT_CATEGORIES } from '@/constants/product';
import { ProductCategory } from '@/constants';

/**
 * Product record structure
 */
export interface ProductRecord {
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
 * In-memory store for Product records
 */
class ProductStore {
  private records: Map<number, ProductRecord> = new Map();
  private currentId: number = 0;

  constructor() {
    this.seedInitialProducts();
  }

  /**
   * Seeds initial 8 products (2 per category)
   */
  private seedInitialProducts(): void {
    const now = new Date().toISOString();

    const initialProducts: Omit<ProductRecord, 'id' | 'dateCreated' | 'dateModified'>[] = [
      // Medicinal Teas (2 products)
      {
        name: 'Chá de Camomila',
        description: 'Chá natural de camomila orgânica',
        benefits: 'Auxilia no relaxamento e melhora a qualidade do sono',
        category: PRODUCT_CATEGORIES.MEDICINAL_TEAS,
        imageUrl: '/images/products/cha-camomila.jpg',
      },
      {
        name: 'Chá de Hortelã',
        description: 'Chá refrescante de hortelã natural',
        benefits: 'Auxilia na digestão e proporciona sensação refrescante',
        category: PRODUCT_CATEGORIES.MEDICINAL_TEAS,
        imageUrl: '/images/products/cha-hortela.jpg',
      },
      // Spices and Condiments (2 products)
      {
        name: 'Açafrão em Pó',
        description: 'Açafrão-da-terra moído naturalmente',
        benefits: 'Propriedades anti-inflamatórias e antioxidantes',
        category: PRODUCT_CATEGORIES.SPICES_CONDIMENTS,
        imageUrl: '/images/products/acafrao.jpg',
      },
      {
        name: 'Pimenta do Reino',
        description: 'Pimenta do reino preta em grãos',
        benefits: 'Estimula a digestão e possui propriedades antioxidantes',
        category: PRODUCT_CATEGORIES.SPICES_CONDIMENTS,
        imageUrl: '/images/products/pimenta-reino.jpg',
      },
      // Aromatic Plants (2 products)
      {
        name: 'Alecrim Fresco',
        description: 'Ramos frescos de alecrim orgânico',
        benefits: 'Melhora a memória e concentração',
        category: PRODUCT_CATEGORIES.AROMATIC_PLANTS,
        imageUrl: '/images/products/alecrim.jpg',
      },
      {
        name: 'Manjericão',
        description: 'Folhas frescas de manjericão',
        benefits: 'Propriedades anti-inflamatórias e digestivas',
        category: PRODUCT_CATEGORIES.AROMATIC_PLANTS,
        imageUrl: '/images/products/manjericao.jpg',
      },
      // Essential Oils (2 products)
      {
        name: 'Óleo Essencial de Lavanda',
        description: 'Óleo essencial puro de lavanda',
        benefits: 'Promove relaxamento e reduz ansiedade',
        category: PRODUCT_CATEGORIES.ESSENTIAL_OILS,
        imageUrl: '/images/products/oleo-lavanda.jpg',
      },
      {
        name: 'Óleo Essencial de Eucalipto',
        description: 'Óleo essencial puro de eucalipto',
        benefits: 'Auxilia na respiração e possui propriedades descongestionantes',
        category: PRODUCT_CATEGORIES.ESSENTIAL_OILS,
        imageUrl: '/images/products/oleo-eucalipto.jpg',
      },
    ];

    initialProducts.forEach((product) => {
      const id = this.getNextId();
      this.records.set(id, {
        id,
        ...product,
        dateCreated: now,
        dateModified: now,
      });
    });
  }

  /**
   * Get next available ID
   */
  private getNextId(): number {
    this.currentId += 1;
    return this.currentId;
  }

  /**
   * Get all records
   */
  getAll(): ProductRecord[] {
    return Array.from(this.records.values());
  }

  /**
   * Get record by ID
   */
  getById(id: number): ProductRecord | undefined {
    return this.records.get(id);
  }

  /**
   * Get total count of records
   */
  count(): number {
    return this.records.size;
  }
}

/**
 * Singleton instance of ProductStore
 */
export const productStore = new ProductStore();
