import React from 'react'
import { Link } from 'react-router-dom'

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
  model: string
}

const WatchItem:React.FC<WatchItem> = ({ id, imageUrl, price, model }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="watch-item">
        <div className="watch-item_favorite">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"> <path d="m17.472 5.1138 0.0015 0.01667 0.0026 0.01653c0.0115 0.07315 0.0965 0.69074-0.1464 1.7349v1.4e-4c-0.3495 1.5044-1.1573 2.877-2.3424 3.9687-5e-4 4e-4 -9e-4 8e-4 -0.0014 0.0012l-6.0371 5.4707-5.935-5.4708-2.8e-4 -3e-4c-1.1858-1.0914-1.9941-2.4648-2.3437-3.9695l-2e-5 -9e-5c-0.24295-1.0448-0.15782-1.6621-0.1463-1.734l0.002753-0.0172 0.001549-0.01735c0.24473-2.7398 2.1268-4.6134 4.373-4.6134 1.4868 0 2.8268 0.80621 3.6158 2.1778l0.42865 0.74507 0.43574-0.74095c0.79431-1.3507 2.1975-2.1815 3.7176-2.1815 2.2466 0 4.1283 1.8736 4.3733 4.6134z" fill='#000'/> </svg>
        </div>
        <div className="watch-item__image">
          <img src={imageUrl} alt="Watch" />
        </div>
        <div className="watch-item__title">
          <h2>{model}</h2>
        </div>
        <div className="watch-item__price">
          <span>{price} Р</span>
        </div>
        <div className="watch-item__buy">
          <button><Link to="/">Купить</Link></button>
        </div>
      </div>
    </Link>
  )
}

export default WatchItem