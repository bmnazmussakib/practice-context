import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Shipment from './component/Shipment/Shipment';

function App() {
      const appStyle = {
        color: 'orange',
        border: '1px solid orange',
        padding: '30px',
        margin: '30px'
    }

    const [count, setCount] = useState(0);

    const increment = () => {
      let newCount = count + 1;
      setCount(newCount);
    }
    

  return (
    <div style={appStyle}>
      <h1>This is App.js: {count}</h1>
      <button onClick={increment}>Increase</button>
      <Home count={count}></Home>
      
      
      

    </div>
  );
}

export default App;
