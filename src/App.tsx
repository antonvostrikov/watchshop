import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import Header from './components/Header/Header';
import WristWatches from './pages/WristWatches';
import PremiumWatches from './pages/PremiumWatches';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useAppDispatch } from './hooks/hook';
import { getProductsFromCart } from './redux/slices/cartSlice';
import Favorite from './pages/Favorite';
import { getProductsFromFavorite } from './redux/slices/favoriteSlice';

const App:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProductsFromCart())
    dispatch(getProductsFromFavorite())
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
      </Routes>
    </div>
  )
}

export default App;
