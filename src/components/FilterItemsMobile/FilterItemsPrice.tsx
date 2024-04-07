import React, { ChangeEvent } from 'react'

interface IFilterItemsPriceProps {
  minHandler: (price: number) => void
  maxHandler: (price: number) => void
}

const FilterItemsPrice:React.FC<IFilterItemsPriceProps> = ({ minHandler, maxHandler }) => {
  const inputHandlerMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    minHandler(Number(e.target.value))
  }

  const inputHandlerMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    maxHandler(Number(e.target.value))
  }

  return (
    <div className="filter-wrapper__price">
      <h2>Цена</h2>
      <div className="filter-price">
        <div className="filter-price__from">
          <span>От</span><input type="text" onChange={(e) => inputHandlerMinPrice(e)} />
        </div>
        <div className="filter-price__to">
          <span>До</span><input type="text" onChange={(e) => inputHandlerMaxPrice(e)} />
        </div>
      </div>
    </div>
  )
}

export default FilterItemsPrice