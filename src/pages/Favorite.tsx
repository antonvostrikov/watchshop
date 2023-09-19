import React from 'react'
import { useAppSelector } from '../hooks/hook'
import FavoriteBlock from '../components/FavoriteBlock/FavoriteBlock'
import { useNavigate } from 'react-router-dom'

const Favorite: React.FC = () => {
	const navigate = useNavigate()
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
				<FavoriteBlock />
			</div>
    </section>
	)
}

export default Favorite