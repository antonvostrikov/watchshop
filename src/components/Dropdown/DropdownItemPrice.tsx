import React, { ChangeEvent } from 'react'

type DropdownPrice = {
  minHandler: (price: number) => void
  maxHandler: (price: number) => void
}

const DropdownItemPrice:React.FC<DropdownPrice> = ({ minHandler, maxHandler }) => {
  const inputHandlerMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    minHandler(Number(e.target.value))
  }

  const inputHandlerMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    maxHandler(Number(e.target.value))
  }

  return (
    <div className="dropdown-price">
      <div className="dropdown-price_from">
        <span>От</span><input type="text" onChange={(e) => inputHandlerMinPrice(e)} />
      </div>
      <div className="dropdown-price_to">
        <span>До</span><input type="text" onChange={(e) => inputHandlerMaxPrice(e)} />
      </div>
    </div>
  )
}

export default DropdownItemPrice