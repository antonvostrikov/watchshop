import { Link } from "react-router-dom"
import React from 'react'

const Menu:React.FC = () => {
  return (
    <div className="menu-list">
      <nav>
        <ul>
          <li>
            <Link to="/watches">наручные часы</Link>
          </li>
          <li>
            <Link to="/watches/premium">часы люкс</Link>
          </li>
          <li>
            <Link to="/titoni">titoni</Link>
          </li>
          <li>
            <Link to="/casio">casio</Link>
          </li>
          <li>
            <Link to="/accessories">аксессуары</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu