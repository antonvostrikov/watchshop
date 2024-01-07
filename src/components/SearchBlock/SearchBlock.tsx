import React from 'react'

import { IProduct } from '../../interfaces/product.interface'
import SearchItem from '../SearchItem/SearchItem'

interface ISearchBlockProps {
  products: IProduct[]
}

const SearchBlock:React.FC<ISearchBlockProps> = ({ products }) => {
  return (
    <div className="search-results">
      { products.map(product => <SearchItem {...product}/>) }
    </div>
  )
}

export default SearchBlock