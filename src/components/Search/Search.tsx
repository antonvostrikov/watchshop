import React, { ChangeEvent } from 'react'
import Modal from '../Modal/Modal'

import CloseSvg from '../../ímg/close.svg'
import ClearSvg from '../../ímg/clear.svg'
import debounce from 'lodash.debounce'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { searchProduct } from '../../redux/slices/searchProductsSlice'
import SearchBlock from '../SearchBlock/SearchBlock'
import SearchEmpty from '../SearchEmpty/SearchEmpty'

interface ISearchProps {
  popup: boolean
  closePopup: () => void
}

const Search:React.FC<ISearchProps> = ({ popup, closePopup }) => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()

  const clearInputHandler = () => {
    setInputValue('')
    inputRef.current?.focus()
  }

  const updateInputSearch = React.useCallback(
    debounce((str: string) => {
      dispatch(searchProduct(str));
    }, 1000),
    [],
  );

  const inputSerachHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    updateInputSearch(event.target.value)
  }

  const { searchProducts } = useAppSelector(state => state.search)
  const { initialProducts } = useAppSelector(state => state.products)
  
  const renderSearchBlock = () => {
    if (inputValue !== '' && searchProducts.length === 0) {
      return <SearchEmpty />
    } else if (inputValue === ''){
      return <SearchBlock products={initialProducts.slice(0, 12)} />
    } else {
      return <SearchBlock products={searchProducts.slice(0, 12)} /> 
    }
  }

  return (
    <>
      <Modal isOpen={popup} closeModal={closePopup} className={'modal-search'}>
        <Modal.Header>
          <div className="search-title">
            <h2>Поиск товаров</h2>
          </div>
          <div className="modal-close">
            <span onClick={() => closePopup()}><img src={CloseSvg} alt="" /></span>
          </div>
          <div className="search-form">
            <form>
              <input type="text" placeholder="Введите запрос.." value={inputValue} onChange={(event) => inputSerachHandler(event)} ref={inputRef} />
            </form>
            <div className="search-clear" onClick={() => clearInputHandler()}>
              <img src={ClearSvg} alt="" />
            </div>
          </div>
        </Modal.Header>
        <Modal.Content className={inputValue !== '' && searchProducts.length === 0 ? 'empty' : ''}>
          <div className="container-search">
            { renderSearchBlock() }
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Search 