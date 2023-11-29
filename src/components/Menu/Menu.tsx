import { Link } from "react-router-dom"
import React from 'react'
import SearchSvg from '../../ímg/search.svg'

import useDebounce from "../../hooks/useDebounce"

interface IMenuProps {
  handlerSearch: (searchValue: string) => void
  searchValue: string
  handlerResult: (resultSearch: string) => void
  handlerOpenSearchSection: (isOpen: boolean) => void
}

const Menu:React.FC<IMenuProps> = ({ 
  handlerSearch, 
  searchValue,
  handlerResult,
  handlerOpenSearchSection
}) => {
  
  const debounce = useDebounce(searchValue, 500)

  React.useEffect(() => {
    if (debounce) {
      handlerResult(debounce)
      handlerOpenSearchSection(true)
    } else {
      handlerResult('')
      handlerOpenSearchSection(false)
    }
  }, [debounce])

  const handlerSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlerSearch(e.target.value)
  }

  return (
    <div className="menu">
      <div className="container">
        <div className="menu-search">
          <form>
            <input type="text" placeholder="Поиск" value={searchValue} onChange={handlerSearchProducts}/>
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