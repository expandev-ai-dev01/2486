/**
 * @summary
 * In-memory store instance for Benefit entity.
 * Provides singleton pattern for data storage with pre-seeded benefits.
 *
 * @module instances/benefit/benefitStore
 */

import { BENEFIT_TYPES } from '@/constants/benefit';
import { BenefitType } from '@/constants';

/**
 * Benefit record structure
 */
export interface BenefitRecord {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: BenefitType;
  dateCreated: string;
  dateModified: string;
}

/**
 * In-memory store for Benefit records
 */
class BenefitStore {
  private records: Map<number, BenefitRecord> = new Map();
  private currentId: number = 0;

  constructor() {
    this.seedInitialBenefits();
  }

  /**
   * Seeds initial 4 benefits
   */
  private seedInitialBenefits(): void {
    const now = new Date().toISOString();

    const initialBenefits: Omit<BenefitRecord, 'id' | 'dateCreated' | 'dateModified'>[] = [
      {
        title: 'Produtos 100% Naturais',
        description:
          'Todos os nossos produtos são cultivados de forma natural, sem agrotóxicos ou aditivos químicos',
        icon: 'leaf',
        type: BENEFIT_TYPES.NATURAL,
      },
      {
        title: 'Benefícios para Saúde',
        description:
          'Produtos ricos em nutrientes e propriedades medicinais que contribuem para o bem-estar',
        icon: 'heart',
        type: BENEFIT_TYPES.HEALTH,
      },
      {
        title: 'Sustentabilidade',
        description:
          'Práticas sustentáveis de cultivo que respeitam o meio ambiente e promovem a biodiversidade',
        icon: 'globe',
        type: BENEFIT_TYPES.SUSTAINABILITY,
      },
      {
        title: 'Qualidade Premium',
        description: 'Seleção rigorosa e controle de qualidade em todas as etapas de produção',
        icon: 'star',
        type: BENEFIT_TYPES.PREMIUM,
      },
    ];

    initialBenefits.forEach((benefit) => {
      const id = this.getNextId();
      this.records.set(id, {
        id,
        ...benefit,
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
  getAll(): BenefitRecord[] {
    return Array.from(this.records.values());
  }

  /**
   * Get record by ID
   */
  getById(id: number): BenefitRecord | undefined {
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
 * Singleton instance of BenefitStore
 */
export const benefitStore = new BenefitStore();
