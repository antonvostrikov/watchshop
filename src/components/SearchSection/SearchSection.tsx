import React from 'react'
import { useAppSelector } from '../../hooks/hook'

import WatchBlockSearch from '../WatchBlockSearch/WatchBlockSearch'

interface ISearchSectionProps {
  isOpen: boolean
  handleOpenSearch: (isOpen: boolean) => void
  handlerSearchValue: (searchValue: string) => void
}

const SearchSection:React.FC<ISearchSectionProps> = ({ 
  isOpen, 
  handleOpenSearch, 
  handlerSearchValue 
}) => {
  const { searchProducts } = useAppSelector(state => state.products)

  const searchRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        handleOpenSearch(false)
        handlerSearchValue('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchRef])

  return (
    <div className={isOpen ? "header-top__search active" : "header-top__search"} ref={searchRef}>
      <div className="container">
        {searchProducts && <WatchBlockSearch products={searchProducts}/> } 
      </div>
    </div>
  )
}

export default SearchSection