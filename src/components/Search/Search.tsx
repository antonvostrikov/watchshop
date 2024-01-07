import React from 'react'
import Modal from '../Modal/Modal'

import CloseSvg from '../../ímg/close.svg'
import useDebounce from '../../hooks/useDebounce'
import { searchProduct } from '../../redux/slices/searchProductsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import SearchBlock from '../SearchBlock/SearchBlock'

interface IEnterSearch {
  popup: boolean
  closePopup: () => void
}

const Search:React.FC<IEnterSearch> = ({ popup, closePopup }) => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const [resultValue, setResultValue] = React.useState<string>()

  const debounced = useDebounce(inputValue, 1000)

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (debounced) {
      setResultValue(debounced)
    }
  }, [debounced])
  
  
  React.useEffect(() => {
    if (resultValue) {
      dispatch(searchProduct(resultValue))
    } 
    
  }, [resultValue])

  const { searchProducts } = useAppSelector(state => state.search)

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
              <input type="text" placeholder="Введите запрос.." onChange={(e) => setInputValue(e.target.value)}/>
            </form>
          </div>
        </Modal.Header>
        <Modal.Content>
          { searchProducts.length !== 0 && <SearchBlock products={searchProducts}/> }
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Search 