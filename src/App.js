import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BuyProducts from './components/BuyProducts';
import SellProducts from './components/SellProducts';


export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />} />

          <Route path="/services/:name" element={<BuyProducts />} />
          <Route path="/services/:name" element={<SellProducts />} />

          <Route path="/contact/" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}
