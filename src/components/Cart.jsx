import React from 'react';

const Cart = ({ cartItems, isCartOpen, toggleCart }) => {
  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleCart}>
        ❌ Close
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
