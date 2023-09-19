import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

import heartBlack from '../../ímg/heart-black.svg'
import heartWhite from '../../ímg/heart-white.svg'
import { addToFavorite, deleteProductFromFavorite } from '../../redux/slices/favoriteSlice'

type WatchCharacteristics = {
  country: string,
  model: string,
  type: string,
  dial: string,
  band: string,
  waterproof: string,
  dimensions: string
}

type WatchItem = {
  id: number,
  imageUrl: string,
  price: number,
  name: string
}

const WatchItem:React.FC<WatchItem> = ({ id, imageUrl, price, name }) => {
  const dispatch = useAppDispatch()
  const findFavoriteProducts = useAppSelector(state => state.favorite.favorite)

  const isProductInFavorite = (id: number) => {
    return findFavoriteProducts.some(product => product.id === id)
  }

  const onClickFavoriteProduct = () => {
    if (isProductInFavorite(id)) {
      dispatch(deleteProductFromFavorite(id))
    } else {
      dispatch(addToFavorite({ id, imageUrl, price, name }))
    }
  }

  return (
    <div className="watch-item">
      <div className="watch-item_favorite">
        <span onClick={() => onClickFavoriteProduct()}><img src={isProductInFavorite(id) ? heartBlack : heartWhite} alt="" /></span>
      </div>
      <div className="watch-item__image">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="Watch" />
        </Link>  
      </div>
      <div className="watch-item__title">
        <Link to={`/product/${id}`}>
          <h2>{name}</h2>
        </Link>  
      </div>
      <div className="watch-item__price">
        <Link to={`/product/${id}`}>
          <span>{price} Р</span>
        </Link>  
      </div>
      <div className="watch-item__buy">
        <button><Link to="/">Купить</Link></button>
      </div>
    </div>
  )
}

export default WatchItem