export interface Product {
  id: number;
  name: string;
  category: 'mini-phones' | 'mini-cameras' | 'mini-dolls';
  price: number;
  image: string;
  description: string;
  colors?: string[];
  inStock: boolean;
}

export type Category = 'all' | 'mini-phones' | 'mini-cameras' | 'mini-dolls';