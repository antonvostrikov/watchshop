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
import { getCountries } from './redux/slices/countrySlice';

const App:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
		dispatch(getProductsFromFavorite());
    dispatch(getCountries());
	}, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="watches" element={<WristWatches />} />
        <Route path="watches/premium" element={<PremiumWatches />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="casio" element={<Casio />} />
        <Route path="titoni" element={<Titoni />} />
      </Routes>
    </div>
  )
}

export default App;
