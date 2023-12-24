import React from 'react'

import { IProduct } from '../../interfaces/product.interface'
import SearchedItem from '../SearchedItem/SearchedItem'

interface ISearchedBlockProps {
  products: IProduct[]
}

const SearchedBlock:React.FC<ISearchedBlockProps> = ({ products }) => {
  return (
    <div className="search-block__products">
      { products.slice(0, 4).map(product => <SearchedItem {...product} />) }
    </div>
  )
}

export default SearchedBlock