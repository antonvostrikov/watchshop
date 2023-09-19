import React from 'react'
import { useAppSelector } from '../../hooks/hook'
import WatchItem from '../WatchItem/WatchItem'

const FavoriteBlock: React.FC = () => {
  const favoriteProducts = useAppSelector(state => state.favorite.favorite)

  return (
    <div className="favorite-items">
      { favoriteProducts.length !== 0 ? favoriteProducts.map(favorite => <WatchItem key={favorite.id} {...favorite} />) : <>Пусто</> }
    </div>
  )
}

export default FavoriteBlock