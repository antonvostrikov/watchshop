import React from 'react'
import { useAppSelector } from '../../hooks/hook'
import WatchItem from '../WatchItem/WatchItem'
import { getProductsFromFavorite } from '../../redux/slices/favoriteSlice'

const FavoriteBlock: React.FC = () => {
  const favoriteProducts = useAppSelector(state => state.favorite.favorite)

  console.log(favoriteProducts)

  return (
    <div className="favorite-items">
      { favoriteProducts.length !== 0 ? favoriteProducts.map(favorite => <WatchItem key={favorite.id} {...favorite} />) : <>Пусто</> }
    </div>
  )
}

export default FavoriteBlock