// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail'; // Import the product detail component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* Route for product details */}
      </Routes>
    </Router>
  );
};

export default App;

