import React from 'react'

import { IProductsListProps } from '../../interfaces/product.interface'
import WatchItemSearch from '../WatchItemSearch/WatchItemSearch'

const WatchBlockSearch:React.FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="watches-items__searched">
      { products.slice(0, 4).map(product => <WatchItemSearch {...product}/>) }
    </div>
  )
}

export default WatchBlockSearch