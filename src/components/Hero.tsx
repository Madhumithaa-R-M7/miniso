import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cute & Aesthetic
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Mini Collectibles
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover adorable miniature phones, cameras, and dolls that bring joy to your everyday life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Shop Collection
            </button>
            <button className="border-2 border-pink-300 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-200">
              View Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-200 rounded-full opacity-60 animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;