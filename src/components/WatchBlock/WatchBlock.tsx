import React from 'react'

import WatchItem from '../WatchItem/WatchItem'
import WatchSkeleton from '../WatchItem/WatchSkeleton'

import { useAppSelector, useAppDispatch } from '../../hooks/hook'
import { getProductsFromCart } from '../../redux/slices/cartSlice'

const WatchBlock:React.FC = () => {
  const { watches, status } = useAppSelector(state => state.watches)

  const wristWatches = watches.map(watch => <WatchItem key={watch.id} {...watch} />)
  const watchesSkeleton = [...Array(6)].map((_, index) => <WatchSkeleton key={index} />)

  return (
    <div className="watches-items">
       { status === "fullfilled" ? wristWatches : watchesSkeleton }
    </div>
  )  
}

export default WatchBlock