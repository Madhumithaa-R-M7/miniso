import React from 'react';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold">Miniso Mini</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your destination for adorable mini collectibles that bring joy and cuteness to everyday life.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mini Phones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mini Cameras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mini Dolls</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>123 Cute Street, Kawaii City</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>hello@minisomini.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Miniso Mini. All rights reserved. Made with 💖 for cute things lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;