import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItemToCart = () => {
    if (itemName && itemPrice) {
      setCart([...cart, { name: itemName, price: parseFloat(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    } else {
      alert("Please enter both item name and price");
    }
  };

  const removeItemFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => 
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <input 
        type="text" 
        value={itemName} 
        placeholder="Item Name" 
        onChange={(e) => setItemName(e.target.value)} 
      />
      <input 
        type="number" 
        value={itemPrice} 
        placeholder="Item Price" 
        onChange={(e) => setItemPrice(e.target.value)} 
      />
      <button onClick={addItemToCart}>Add Item</button>

      {cart.length ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₱{item.price.toFixed(2)} {/* Display Peso sign */}
              <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h3>Total: ₱{calculateTotalPrice()}</h3> {/* Display Peso sign */}
    </div>
  );
}

export default App;
