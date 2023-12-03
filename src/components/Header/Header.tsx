import React from 'react'
import { Link } from 'react-router-dom'

import Enter from '../Enter/Enter'
import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItemCity from '../Dropdown/DropdownItemCity'
import Menu from '../Menu/Menu'
import SearchSection from '../SearchSection/SearchSection'

import CityArrowSvg from '../../ímg/city-arrow.svg'
import EnterSvg from '../../ímg/enter.svg'
import BasketSvg from '../../ímg/basket.svg'
import FavoriteSvg from '../../ímg/heart-white.svg'

import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { getProductsSearch } from '../../redux/slices/getProductsSlice'
import { getCities, getMainCity } from '../../redux/slices/citySlice'

import { ICity } from '../../interfaces/city.interface'

interface IHeaderProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Header: React.FC<IHeaderProps> = ({ isOpen, setIsOpen }) => {
  const [enterPopup, setEnterPopup] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState<string>('')
  const [resultSearch, setResultSearch] = React.useState<string>()

  const dispatch = useAppDispatch()

  const onClickOpenPopup = () => {
    setEnterPopup(true)
  } 

  const onClickClosePopup = () => {
    setEnterPopup(false)
  }

  React.useEffect(() => {
    dispatch(getMainCity())
    dispatch(getCities())
  }, [])

  React.useEffect(() => {
    if (resultSearch) {
      dispatch(getProductsSearch(resultSearch))
    }
  }, [resultSearch])
  
  const { mainCity, cities } = useAppSelector(state => state.cities)

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
              <DropdownButton> <img src={CityArrowSvg} alt="Город"/></DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { cities.map(city => <DropdownItemCity city={city.city} />) }
                </DropdownList>
              </DropdownContent> 
            </Dropdown >
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
      <Menu 
        handlerSearch={setSearchValue} 
        searchValue={searchValue} 
        handlerResult={setResultSearch}
        handlerOpenSearchSection={setIsOpen}
      />
      { enterPopup && <Enter popup={enterPopup} closePopup={onClickClosePopup}/> }
      { resultSearch && <SearchSection 
        handlerSearchValue={setSearchValue} 
        isOpen={isOpen} 
        handleOpenSearch={setIsOpen} /> 
      }
    </header>
  )
}

export default Header