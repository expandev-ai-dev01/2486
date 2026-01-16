import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/productService';
import type { ProductListParams } from '../../types/models';

export interface UseProductListOptions {
  filters?: ProductListParams;
  enabled?: boolean;
}

export const useProductList = (options: UseProductListOptions = {}) => {
  const { filters, enabled = true } = options;

  const queryKey = ['products', filters];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => productService.list(filters),
    enabled,
  });

  return {
    products: data ?? [],
    isLoading,
    error,
    refetch,
  };
};
