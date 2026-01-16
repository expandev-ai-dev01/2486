import type { Product } from '../../types/models';

export interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  className?: string;
}
