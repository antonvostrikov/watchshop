import React, { ChangeEvent } from 'react'

import SearchSvg from '../../ímg/search.svg';
import useDebounce from '../../hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { searchProduct } from '../../redux/slices/searchProductsSlice';
import SearchedBlock from '../SearchedBlock/SearchedBlock';

import { IProduct } from '../../interfaces/product.interface';

interface ISectionSearchProps {
  search: boolean
  setSearchPopup: (search: boolean) => void
}

const SectionSearch:React.FC<ISectionSearchProps> = ({ search, setSearchPopup }) => {
  const searchRef = React.useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = React.useState<string>('')
  const [resultProducts, setResultProducts] = React.useState<IProduct[]>([])

  const { products } = useAppSelector(state => state.products)

  const debounced = useDebounce(searchValue, 800)

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    if (debounced) {
      const searchedProducts = products.filter(product => product.name.toLowerCase().includes(debounced.toLowerCase()))

      setResultProducts(searchedProducts)
    } else {
      setResultProducts([])
    }
    
  }, [debounced])

  React.useEffect(() => {
    search && document.body.classList.add('modal-body')

    return () => {
      document.body.classList.remove('modal-body')
    }
  }, [search])

  React.useEffect(() => {
    const onClickOutsideSearch = (e: MouseEvent) => {
      if (search && searchRef && searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchPopup(false)
      }      
    }
    document.addEventListener('mousedown', onClickOutsideSearch)

    return () => {
      document.removeEventListener('mousedown', onClickOutsideSearch)
    }
  }, [searchRef])

  return (
    <div className={resultProducts.length !== 0 ? `search-block active` : `search-block`} ref={searchRef}>
      <div className="container">
        <div className="search-block__form">
          <form>
            <input type="text" placeholder="Искать в каталоге" onChange={(e) => inputSearchHandler(e)} />
            <span><img src={SearchSvg} /></span>
          </form>
        </div>
       { resultProducts.length !== 0 && <SearchedBlock products={resultProducts}/> }
      </div>
    </div>
  )
}

export default SectionSearch