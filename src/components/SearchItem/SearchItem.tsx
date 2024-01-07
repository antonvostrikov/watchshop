import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/product.interface'
import useTransformPrice from '../../hooks/useTransformPrice'

const SearchItem:React.FC<IProduct> = ({ id, imageUrl, name, price }) => {
 const { transformPrice } = useTransformPrice(price.toString())

  return (
    <div className="search-item">
      <div className="search-item__image">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="" />
        </Link>
      </div>
      <div className="search-item__title">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>  
      </div>
      <div className="search-item__price">
        <span>{transformPrice}</span>
      </div>
    </div>
  )
}

export default SearchItem