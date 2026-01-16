export interface Product {
  id: number;
  name: string;
  description: string | null;
  benefits: string | null;
  category: 'medicinal_teas' | 'spices_condiments' | 'aromatic_plants' | 'essential_oils';
  imageUrl: string | null;
  dateCreated?: string;
  dateModified?: string;
}

export interface ProductListParams {
  category?: Product['category'];
}
