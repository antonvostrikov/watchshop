import React from 'react'
import WatchItem from '../components/WatchItem/WatchItem'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/hook'
import FavoriteEmpty from '../components/FavoriteEmpty/FavoriteEmpty'
import Footer from '../components/Footer/Footer'

const Favorite: React.FC = () => {
	const navigate = useNavigate()

	const { favorite } = useAppSelector(state => state.favorite)

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
				<div className={favorite.length === 0 ? `favorite-wrapper no-flex` : `favorite-wrapper` }>
					{ favorite.length !== 0 ? favorite.map(favoriteItem => <WatchItem key={favoriteItem.id} {...favoriteItem} />) : <FavoriteEmpty /> }
				</div>
			</div>
			<Footer />
    </section>
	)
}

export default Favorite