import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      <Hero />
      <ProductGrid 
        products={products}
        category={activeCategory}
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;