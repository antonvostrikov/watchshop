import React from 'react'

import PlusSvg from '../../ímg/plus.svg';
import MinusSvg from '../../ímg/minus.svg';
import CloseSvg from '../../ímg/close.svg';

import { deleteProductFromCart, minusProductToCart, plusProductToCart } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../hooks/hook';

import { ICartProduct } from '../../interfaces/cart.interface';

const CartItem:React.FC<ICartProduct> = ({ id, imageUrl, name, sum, price }) => {
  const [number, setNumber] = React.useState(sum)
  const dispatch = useAppDispatch()

  const onClickMinus = () => {
    if (number === 0) return 

    setNumber(prev => prev - 1)
    dispatch(minusProductToCart(id))
  }

  const onClickPlus = () => {
    setNumber(prev => prev +1)
    dispatch(plusProductToCart(id))
  }

  const onClickDeleteProduct = () => {
    dispatch(deleteProductFromCart(id))
  }

  return (
    <div className="wrapper-product">
      <div className="wrapper-product__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="wrapper-product__name">
        <h3>{name}</h3>
      </div>
      <div className="wrapper-product__count">
        <span className="count-title">Количество</span>
        <div className="product-count__number">
          <span className="count-minus" onClick={() => onClickMinus()}>
            <img src={MinusSvg} alt="" />
          </span>
          <span className="count-numeric">{number}</span>
          <span className="count-plus" onClick={() => onClickPlus()}>
            <img src={PlusSvg} alt="" />
          </span>
        </div>
      </div>
      <div className="wrapper-product__sum">
        <span className="sum-title">Итого</span>
        <span>{price}</span>
      </div>
      <div className="wrapper-product__delete">
        <span onClick={() => onClickDeleteProduct()}><img src={CloseSvg} alt="" /></span>
      </div>
    </div>
  )
}

export default CartItem;