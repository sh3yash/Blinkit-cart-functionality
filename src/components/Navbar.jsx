import React from 'react';

const Navbar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar">
      <h1>Shopping Cart</h1>
      <button className="cart-btn" onClick={toggleCart}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
