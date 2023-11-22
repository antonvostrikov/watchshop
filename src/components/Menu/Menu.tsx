import { Link } from "react-router-dom"

import SearchSvg from '../../ímg/search.svg'

const Menu:React.FC = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-search">
          <form>
            <input type="text" placeholder="Поиск" />
            <button><Link to='/'><img src={SearchSvg}/></Link></button>
          </form>
        </div>
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
      </div>
    </div>
  )
}

export default Menu