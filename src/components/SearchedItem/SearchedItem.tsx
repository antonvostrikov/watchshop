import React from 'react'

import useTransformPrice from '../../hooks/useTransformPrice'

interface ISearchedItemsProps {
  name: string
  price: number
  imageUrl: string
}

const SearchedItem:React.FC<ISearchedItemsProps> = ({ name, price, imageUrl }) => {
  const { transformPrice } = useTransformPrice(price.toString())

  return (
    <div className="searched-item">
      <div className="searched-item__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="searched-item__name">
        <h2>{name}</h2>
      </div>
      <div className="searched-item__price">
        <span>{transformPrice}</span>
      </div>
    </div>
  )
}

export default SearchedItem