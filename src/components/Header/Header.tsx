import React from 'react'
import { Link } from 'react-router-dom'

import Enter from '../Enter/Enter'
import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'

import CityArrowSvg from '../../ímg/city-arrow.svg'
import EnterSvg from '../../ímg/enter.svg'
import BasketSvg from '../../ímg/basket.svg'
import FavoriteSvg from '../../ímg/heart-white.svg'
import { useAppSelector } from '../../hooks/hook'
import DropdownItemCity from '../Dropdown/DropdownItemCity'

const Header: React.FC = () => {
  const [enterPopup, setEnterPopup] = React.useState(false)

  const onClickOpenPopup = () => {
    setEnterPopup(true)
  }

  const onClickClosePopup = () => {
    setEnterPopup(false)
  }
  
  const { cities, mainCity } = useAppSelector(state => state.cities)
  console.log(mainCity)
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
          <div className="header-top__location">
            <Dropdown>
              <DropdownButton>{mainCity.map(city => city.city)} <img src={CityArrowSvg} alt="Город"/></DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { cities.map(city => <DropdownItemCity id={city.id} city={city.city} />) }
                </DropdownList>
              </DropdownContent> 
            </Dropdown>
          </div>
          <div className="header-top__logo">
            <h1><Link to='/'>watchshop</Link></h1>
          </div>
          <div className="header-top__right">
            <div className="header-top__enter">
              <span onClick={() => onClickOpenPopup()}>
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
      { enterPopup && <Enter popup={enterPopup} closePopup={onClickClosePopup}/> }
      
    </header>
  )
}

export default Header