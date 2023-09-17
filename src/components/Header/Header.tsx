import CityArrowSvg from '../../ímg/city-arrow.svg'
import EnterSvg from '../../ímg/enter.svg'
import BasketSvg from '../../ímg/basket.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
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
              <Link to="/enter">
                <span>
                  <img src={EnterSvg} alt="Вход" />
                  Вход
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
    </header>
  )
}

export default Header