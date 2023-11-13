import React from 'react'

import WatchItem from '../WatchItem/WatchItem'
import WatchSkeleton from '../WatchItem/WatchSkeleton'

import { useAppSelector, useAppDispatch } from '../../hooks/hook'
import { getProductsFromCart } from '../../redux/slices/cartSlice'

type imageSlider = {
  img: string
}

type Watch = {
  id: number
  sex?: string
  name: string
  price: number
  imageUrl: string
  description: string
  country?: string
  model: string
  type?: string
  dial?: string
  band?: string
  waterproof?: string
  dimensions?: string
  typeWatch?: string
  sliderImages?: imageSlider[]
  rating?: number
  color?: string
  material?: string
}

type Products = {
  watches: Watch[]
  status: string
}

const WatchBlock:React.FC<Products> = ({watches, status}) => {
  const wristWatches = watches.map(watch => <WatchItem key={watch.id} {...watch} />)
  const watchesSkeleton = [...Array(6)].map((_, index) => <WatchSkeleton key={index} />)
 
  return (
    <div className="watches-items">
       { status === "pending" ? watchesSkeleton : wristWatches }
    </div>
  )  
}

export default WatchBlock