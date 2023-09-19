import React from 'react'

import CityArrowSvg from '../../ímg/city-arrow.svg'
import EnterSvg from '../../ímg/enter.svg'
import BasketSvg from '../../ímg/basket.svg'
import FavoriteSvg from '../../ímg/heart-white.svg'

import { Link } from 'react-router-dom'
import Enter from '../Enter/Enter'
import { useAppSelector } from '../../hooks/hook'

const Header: React.FC = () => {
  const [enterPopup, setEnterPopup] = React.useState(false)

  return (
    <header className="header-top">
      <div className="header-top__connection">
        <div className="header-top__phone">
          <span>8 (800) 000-00-00</span>
        </div>
        <div className="header-top__phone">
          <span>+7 (495) 000-00-00</span>
        </div>
        <div className="header-top__link">
          <a href="#">Заказать звонок</a>
        </div>
      </div>
      <div className="header-top__main">
        <div className="container">
          <div className="header-top__location">
            <span>Москва <img src={CityArrowSvg} alt="Город"/></span>
          </div>
          <div className="header-top__logo">
            <h1><Link to='/'>watchshop</Link></h1>
          </div>
          <div className="header-top__right">
            <div className="header-top__enter">
              <span onClick={() => setEnterPopup(!enterPopup)}>
                <img src={EnterSvg} alt="Вход" />
                Вход
              </span>
            </div>
            <div className="header-top__favorite">
              <Link to="/favorite">
                <span>
                  <img src={FavoriteSvg} alt="" />
                  Избранное
                </span>
              </Link>
            </div>
            <div className="header-top__basket">
              <Link to="/cart">
                <span>
                  <img src={BasketSvg} alt="Корзина" />
                  Корзина
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      { enterPopup ?  
        <div className="absolute-popup">
          <Enter />
        </div>
        : <></>
      }
      
    </header>
  )
}

export default Header