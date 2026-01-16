import type { Benefit } from '../../types/models';

export interface BenefitGridProps {
  benefits: Benefit[];
  isLoading?: boolean;
  className?: string;
}
