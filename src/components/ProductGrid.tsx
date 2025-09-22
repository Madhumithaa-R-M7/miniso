import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, category }) => {
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'mini-phones': return 'Mini Phones';
      case 'mini-cameras': return 'Mini Cameras';
      case 'mini-dolls': return 'Mini Dolls';
      default: return 'All Products';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {getCategoryTitle(category)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {filteredProducts.length} adorable items to choose from
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">😔</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;