import React from 'react'
import { Link } from 'react-router-dom'

import useTransformPrice from '../../hooks/useTransformPrice'

interface ISearchedItemsProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

const SearchedItem:React.FC<ISearchedItemsProps> = ({ id, name, price, imageUrl }) => {
  const { transformPrice } = useTransformPrice(price.toString())

  return (
    <div className="searched-item">
      <div className="searched-item__image">
        <Link to={`product/${id}`}>
          <img src={imageUrl} alt="" />        
        </Link>
      </div>
      <div className="searched-item__name">
        <Link to={`product/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <div className="searched-item__price">
        <Link to={`product/${id}`}>
          <span>{transformPrice}</span>
        </Link>
      </div>
    </div>
  )
}

export default SearchedItem