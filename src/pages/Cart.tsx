import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { getProductsFromCart } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import useTransformPrice from '../hooks/useTransformPrice';
import Footer from '../components/Footer/Footer';

const Cart:React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(getProductsFromCart())
  }, [])

  const { cart, count, total } = useAppSelector(state => state.cart)

  const { transformPrice } = useTransformPrice(total.toString())

  return (
    <>
      <div className="section-cart">
        <div className="container-watches">
          <div className="cart-header">
            <div className="cart-header__title">
              <h2>Корзина</h2>
            </div>
            <div className="cart-header__back">
              <span onClick={() => navigate(-1)}>Назад к покупкам</span>
            </div>
          </div>
          <div className="cart-wrapper">
            { cart.length === 0 ? <CartEmpty /> : cart.map(item => <CartItem key={item.id} {...item} />) }
          </div>
          { cart.length === 0  ? '' : (
            <div className="cart-footer">
              <div className="cart-footer__count">
                <h3>Товаров: <span>{count}</span></h3>
              </div>
              <div className="cart-footer__total">
                <h3>Всего: <span>{transformPrice}</span></h3>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  ) 
}

export default Cart;