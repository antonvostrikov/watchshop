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

import { getProductsFromCart } from './redux/slices/cartSlice';
import { getProductsInitial } from './redux/slices/getProductsSlice';
import NotFoundPage from './pages/NotFoundPage';

export const AppContext = React.createContext({
  searchPopup: false,
  setSearchPopup: (searchPopup: boolean) => {}
})

const App:React.FC = () => {
  const dispatch = useAppDispatch()

  const [searchPopup, setSearchPopup] = React.useState(false)

  React.useEffect(() => {
    dispatch(getProductsInitial());
		dispatch(getProductsFromFavorite());
    dispatch(getProductsFromCart())
	}, [dispatch])
  
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AppContext.Provider value={{ searchPopup, setSearchPopup }}>
    <div className="App">
      <Header />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    </AppContext.Provider>
  )
}

export default App;
