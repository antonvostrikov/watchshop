import React, { ChangeEvent } from 'react'

import SearchSvg from '../../ímg/search.svg';
import useDebounce from '../../hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { searchProduct } from '../../redux/slices/searchProductsSlice';
import SearchedBlock from '../SearchedBlock/SearchedBlock';

interface ISectionSearchProps {
  search: boolean
  setSearchPopup: (search: boolean) => void
}

const SectionSearch:React.FC<ISectionSearchProps> = ({ search, setSearchPopup }) => {
  const searchRef = React.useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = React.useState<string>('')
  const [resultValue, setResultValue] = React.useState<string>()

  const dispatch = useAppDispatch()

  const debounced = useDebounce(searchValue, 800)

  React.useEffect(() => {
    setResultValue(debounced)
  }, [debounced])

  React.useEffect(() => {
    if (resultValue) {
      dispatch(searchProduct(resultValue))
    }
  }, [resultValue])

  React.useEffect(() => {
    search && document.body.classList.add('modal-body')

    return () => {
      document.body.classList.remove('modal-body')
    }
  }, [search])

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const { searchProducts } = useAppSelector(state => state.search)
  console.log(searchProducts)
  return (
    <div className="search-block" ref={searchRef}>
      <div className="container">
        <div className="search-block__form">
          <form>
            <input type="text" placeholder="Искать в каталоге" onChange={(e) => inputSearchHandler(e)} />
            <span><img src={SearchSvg} /></span>
          </form>
        </div>
        { searchProducts.length !== 0 && <SearchedBlock products={searchProducts}/> }
      </div>
    </div>
  )
}

export default SectionSearch