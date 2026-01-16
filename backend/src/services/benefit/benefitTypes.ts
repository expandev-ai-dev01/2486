/**
 * @summary
 * Type definitions for Benefit entity.
 *
 * @module services/benefit/benefitTypes
 */

import { BenefitType } from '@/constants';

/**
 * @interface BenefitEntity
 * @description Represents a benefit entity in the HORTelã catalog
 *
 * @property {number} id - Unique benefit identifier
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 * @property {string} icon - Icon identifier for the benefit
 * @property {BenefitType} type - Benefit type
 * @property {string} dateCreated - ISO 8601 timestamp of creation
 * @property {string} dateModified - ISO 8601 timestamp of last modification
 */
export interface BenefitEntity {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: BenefitType;
  dateCreated: string;
  dateModified: string;
}

/**
 * @interface BenefitListResponse
 * @description Response structure for listing benefits
 *
 * @property {number} id - Unique benefit identifier
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 * @property {string} icon - Icon identifier for the benefit
 * @property {BenefitType} type - Benefit type
 */
export interface BenefitListResponse {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: BenefitType;
}
