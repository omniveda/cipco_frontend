import { useState } from 'react'
import React, { useEffect, lazy, Suspense } from "react";
import Home from './pages/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Products from './pages/Product';
import Certificate from './pages/Certificate';

import './App.css'

function App() {

  return (
    <Suspense fallback={<div className="w-full h-screen flex justify-center items-center text-2xl">Loading...</div>}>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/certificates" element={<Certificate/>}/>
    </Routes>
    <Footer/>
    </Suspense>
  )
}

export default App
