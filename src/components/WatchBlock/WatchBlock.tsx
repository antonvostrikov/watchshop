import React from 'react'

import WatchItem from '../WatchItem/WatchItem'
import WatchSkeleton from '../WatchItem/WatchSkeleton'

import { IProductsListProps } from '../../interfaces/product.interface'

const WatchBlock:React.FC<IProductsListProps> = ({watches, status}) => {
  const wristWatches = watches.map(watch => <WatchItem key={watch.id} {...watch} />)
  const watchesSkeleton = [...Array(6)].map((_, index) => <WatchSkeleton key={index} />)
 
  return (
    <div className="watches-items">
       { status === "pending" ? watchesSkeleton : wristWatches }
    </div>
  )  
}

export default WatchBlock