import React from 'react'

import { IProductItemProps } from '../../interfaces/product.interface'
import { Link } from 'react-router-dom'

const WatchItemSearch:React.FC<IProductItemProps> = ({ id, imageUrl, price, name }) => {
  return (
    <div className="watch-item__search">
      <div className="watch-item__search-image">
        <Link to={`/product/${id}`}><img src={imageUrl} alt="" /></Link>
      </div>
      <div className="watch-item__search-title">
        <Link to={`/product/${id}`}><h3>{name}</h3></Link>
      </div>
      <div className="watch-item__search-price">
        <Link to={`/product/${id}`}><span>{price}</span></Link>
      </div>
    </div>
  )
}

export default WatchItemSearch