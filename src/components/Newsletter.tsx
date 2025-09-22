import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with New Arrivals
        </h2>
        <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
          Be the first to know about our latest cute mini collectibles and exclusive offers
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-4 focus:ring-white/30 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;