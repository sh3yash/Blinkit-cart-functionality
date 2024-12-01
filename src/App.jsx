import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './components/styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartItems.length} toggleCart={toggleCart} />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default App;
