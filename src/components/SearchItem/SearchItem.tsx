import React from 'react'

import { IProduct } from '../../interfaces/product.interface'
import useTransformPrice from '../../hooks/useTransformPrice'

const SearchItem:React.FC<IProduct> = ({ id, imageUrl, name, price }) => {
 const { transformPrice } = useTransformPrice(price.toString())

  return (
    <div className="search-item">
      <div className="search-item__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="search-item__title">
        <h2>{name}</h2>
      </div>
      <div className="search-item__price">
        <span>{transformPrice}</span>
      </div>
    </div>
  )
}

export default SearchItem