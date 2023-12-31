import React from 'react'
import { Link } from 'react-router-dom'

import Enter from '../Enter/Enter'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

import Hamburger from 'hamburger-react'

import SearchSvg from '../../ímg/search.svg'
import CloseSvg from '../../ímg/close.svg'
import EnterSvg from '../../ímg/enter.svg'
import BasketSvg from '../../ímg/basket.svg'
import FavoriteSvg from '../../ímg/heart-white.svg'

import { AppContext } from '../../App'
import MobileMenu from '../MobileMenu/MobileMenu'
import Search from '../Search/Search'

const Header: React.FC = () => {
  const [enterPopup, setEnterPopup] = React.useState(false)
  const [mobileButton, setMobileButton] = React.useState(false)

  const { searchPopup, setSearchPopup } = React.useContext(AppContext)

  const onClickClosePopup = () => {
    setEnterPopup(false)
  }

  const onClickOpenSearch = () => {
    setSearchPopup(true)
  }

  const onClickCloseSearch = () => {
    setSearchPopup(false)
  }

  return (
    <header className="header-top" >
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
          <div className="header-top__inner">
            <div className="header-top__logo">
              <Logo />
            </div>
            <div className="header-top__menu">
              <Menu />
            </div>
            <div className="header-top__mobile-button">
              <Hamburger toggled={mobileButton} toggle={setMobileButton} />
            </div>
            { mobileButton && <MobileMenu openEnter={setEnterPopup} closeMenu={setMobileButton}/> }
            <div className="header-top__right">
              <div className="header-top__search">
                { searchPopup ? (
                  <span className="button-close__search" onClick={() => onClickCloseSearch()}>
                    <img src={CloseSvg} alt="" />
                  </span>
                ) : (
                  <span className="button-open__search" onClick={() => onClickOpenSearch()}>
                    <img src={SearchSvg} alt="" />
                  </span>
                )}
              </div>
              <div className="header-top__enter">
                <span onClick={() => setEnterPopup(true)}>
                  <img src={EnterSvg} alt="Вход" />
                </span>
              </div>
              <div className="header-top__favorite">
                <Link to="/favorite">
                  <span>
                    <img src={FavoriteSvg} alt="" />
                  </span>
                </Link>
              </div>
              <div className="header-top__basket">
                <Link to="/cart">
                  <span>
                    <img src={BasketSvg} alt="Корзина" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      { enterPopup && <Enter popup={enterPopup} closePopup={onClickClosePopup} /> }
      { searchPopup && <Search popup={searchPopup} closePopup={onClickCloseSearch} /> }
    </header>
  )
}

export default Header