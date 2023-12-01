import React from 'react';
import { Routes, Route } from "react-router-dom";
import { getProductsFromFavorite } from './redux/slices/favoriteSlice';
import { useAppDispatch } from './hooks/hook';

import './App.css';

import Main from './pages/Main';
import Header from './components/Header/Header';
import WristWatches from './pages/WristWatches';
import PremiumWatches from './pages/PremiumWatches';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Casio from './pages/Casio';
import Titoni from './pages/Titoni';
import Accessories from './pages/Accessories';
import Belts from './pages/Belts';
import Covers from './pages/Covers';

const App:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
		dispatch(getProductsFromFavorite());
	}, [])

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="watches" element={<WristWatches />} />
        <Route path="watches/premium" element={<PremiumWatches />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="product/:id" element={<Product setIsOpen={setIsOpen} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="casio" element={<Casio />} />
        <Route path="titoni" element={<Titoni />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="accessories/belts" element={<Belts />} />
        <Route path="accessories/covers" element={<Covers />} />
      </Routes>
    </div>
  )
}

export default App;
