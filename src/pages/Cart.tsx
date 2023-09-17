import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { getProductsFromCart } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty/CartEmpty';

const Cart:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getProductsFromCart())
  }, [])

  const productsCart = useAppSelector(state => state.cart.cart)

  return (
    <div className="container-watches">
      <div className="cart-header">
        <div className="cart-header__title">
          <h2>Корзина</h2>
        </div>
        <div className="cart-header__back">
          <span onClick={() => navigate(-1)}>Назад к покупкам</span>
        </div>
      </div>
      
      { productsCart.length === 0 ? <CartEmpty /> : productsCart.map(cart => <CartItem {...cart} />) }
    </div>
  )
}

export default Cart;