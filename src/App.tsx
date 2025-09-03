import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart, { CartItem } from './components/Cart';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product } from './components/ProductCard';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => 
      item.id === product.id && 
      item.selectedSize === 'M' && 
      item.selectedColor === product.colors[0]
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === existingItem.id && 
        item.selectedSize === existingItem.selectedSize && 
        item.selectedColor === existingItem.selectedColor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        selectedSize: 'M',
        selectedColor: product.colors[0]
      };
      setCartItems([...cartItems, newItem]);
    }
    
    // Show cart briefly when item is added
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Hero />
        <ProductGrid 
          products={products}
          onAddToCart={addToCart}
        />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(product) => {
          // Scroll to product or show product details
          console.log('Selected product:', product);
        }}
      />
    </div>
  );
}

export default App;