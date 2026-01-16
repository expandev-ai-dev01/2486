import { useQuery } from '@tanstack/react-query';
import { benefitService } from '../../services/benefitService';
import type { BenefitListParams } from '../../types/models';

export interface UseBenefitListOptions {
  filters?: BenefitListParams;
  enabled?: boolean;
}

export const useBenefitList = (options: UseBenefitListOptions = {}) => {
  const { filters, enabled = true } = options;

  const queryKey = ['benefits', filters];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => benefitService.list(filters),
    enabled,
  });

  return {
    benefits: data ?? [],
    isLoading,
    error,
    refetch,
  };
};
