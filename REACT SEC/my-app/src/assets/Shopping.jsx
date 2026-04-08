import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Products from './Products';
import Contact from './Contact';

function Shopping() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to the Shopping Page</h1>
                <p>Here you can find a variety of products to choose from.</p>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default Shopping;