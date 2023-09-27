import React from 'react'
import WatchItem from '../components/WatchItem/WatchItem'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { getProductsFromFavorite } from '../redux/slices/favoriteSlice'

const Favorite: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const favoriteProducts = useAppSelector(state => state.favorite.favorite)

	return (
		<section className="favorite-watches">
			<div className="container-watches">
				<div className="favorite-header">
					<div className="favorite-header__title">
						<h2>Избранное</h2>
					</div>
					<div className="favorite-header__back">
						<span onClick={() => navigate(-1)}>Назад к покупкам</span>
					</div>
				</div>
				<div className="favorite-wrapper">
					{ favoriteProducts.length !== 0 ? favoriteProducts.map(favorite => <WatchItem key={favorite.id} {...favorite} />) : <>Пусто</> }
				</div>
			</div>
    </section>
	)
}

export default Favorite