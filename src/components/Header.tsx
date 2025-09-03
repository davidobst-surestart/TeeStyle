import React from 'react';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearchClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick, onSearchClick }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">TeeStyle</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
              New Arrivals
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
              Men
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
              Women
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
              Collections
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
              Sale
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onSearchClick}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200">
              <Heart size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-slate-600 hover:text-indigo-600">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}