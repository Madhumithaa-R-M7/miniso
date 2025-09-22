import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react';

interface HeaderProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'mini-phones', label: 'Mini Phones' },
    { id: 'mini-cameras', label: 'Mini Cameras' },
    { id: 'mini-dolls', label: 'Mini Dolls' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Miniso Mini
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;