import React from 'react'

import { Link } from 'react-router-dom'

import CloseSvg from '../../ímg/close.svg'

interface IMobileMenuProps {
  closeMenu: (menu: boolean) => void
  openEnter: (open: boolean) => void
}

const MobileMenu:React.FC<IMobileMenuProps> = ({ openEnter, closeMenu }) => {

  const onClickOpenEnter = () => {
    closeMenu(false)
    openEnter(true)
  }

  return (
    <div className="mobile-wrapper__menu" onClick={() => closeMenu(false)}>
      <div className="header-top__mobile-menu" onClick={(e) => e.stopPropagation()}>
        <h2>Каталог</h2>
        <nav>
          <ul>
            <li onClick={() => closeMenu(false)}>
              <Link to="/watches">наручные часы</Link>
            </li>
            <li onClick={() => closeMenu(false)}>
              <Link to="/watches/premium">часы люкс</Link>
            </li>
            <li onClick={() => closeMenu(false)}>
              <Link to="/titoni">titoni</Link>
            </li>
            <li onClick={() => closeMenu(false)}>
              <Link to="/casio">casio</Link>
            </li>
            <li onClick={() => closeMenu(false)}>
              <Link to="/accessories">аксессуары</Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu__close">
          <span onClick={() => closeMenu(false)}><img src={CloseSvg} alt="" /></span>
        </div>
        <div className="mobile-menu__bottom">
          <button onClick={() => onClickOpenEnter()}>Вход / Регистрация</button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu