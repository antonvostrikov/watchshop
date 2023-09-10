import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Header from './components/Header/Header';
import WristWatches from './pages/WristWatches';
import PremiumWatches from './pages/PremiumWatches';
import Product from './pages/Product';

const App:React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="watches" element={<WristWatches />} />
        <Route path="watches/premium" element={<PremiumWatches />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App;
