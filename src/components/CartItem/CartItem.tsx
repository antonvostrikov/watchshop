import React from 'react'

import PlusSvg from '../../ímg/plus.svg';
import MinusSvg from '../../ímg/minus.svg';
import CloseSvg from '../../ímg/close.svg';

type CartProduct = {
  img: string
  name: string
  sum: number
  price: number
}

const CartItem:React.FC<CartProduct> = ({ img, name, sum, price }) => {
  const [number, setNumber] = React.useState(sum)

  const onClickMinus = () => {
    if (number === 0) return 

    setNumber(prev => prev - 1)
  }

  const onClickPlus = () => {
    setNumber(prev => prev + 1)
  }

  return (
    <div className="cart-wrapper">
      <div className="wrapper-product">
        <div className="wrapper-product__image">
          <img src={img} alt="" />
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
          <span>{price} Р</span>
        </div>
        <div className="wrapper-product__delete">
          <span><img src={CloseSvg} alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;