import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar';
import Home from './pages/Home/HomeScreen';

import ProductIndex from './pages/Products/mainScreen/ProductIndex';
import ProductScreen from './pages/Products/ProductScreen';

function App() {
  return <div className="App">
    <Router>
      <div>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
          <Route path="/products" element={<ProductIndex />} />
          <Route path='/product-screen' element={<ProductScreen />}/>
        </Routes>
      
      </div>
    </Router>
  </div>
}

export default App;
