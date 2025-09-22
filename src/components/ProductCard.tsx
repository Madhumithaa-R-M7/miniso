import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Stock Status */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
          <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors">
            <ShoppingBag className="w-4 h-4 text-gray-600 hover:text-pink-500" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Color Options */}
        {product.colors && (
          <div className="flex space-x-2 mb-4">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-gray-200"
                style={{ 
                  backgroundColor: color.includes('-') 
                    ? '#' + Math.floor(Math.random()*16777215).toString(16) 
                    : color 
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500 self-center">+{product.colors.length - 3}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">${product.price}</span>
          <button 
            disabled={!product.inStock}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;