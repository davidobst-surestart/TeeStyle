import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Product } from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 8));
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl mx-4">
        <div className="p-6">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for t-shirts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Results */}
          {searchTerm && (
            <div className="max-h-96 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  {filteredProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                        setSearchTerm('');
                      }}
                      className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 text-left transition-colors duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{product.category} • ${product.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found for "{searchTerm}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}