export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: 'natural' | 'health' | 'sustainability' | 'premium';
  dateCreated?: string;
  dateModified?: string;
}

export interface BenefitListParams {
  type?: Benefit['type'];
}
