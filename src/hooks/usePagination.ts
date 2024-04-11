import React from "react"

import { IProduct } from "../interfaces/product.interface"

interface IUsePaginationProps {
  currentPage: number
  itemsOnPage: number
  products: IProduct[]
}

const usePagination = ({ currentPage, itemsOnPage, products }: IUsePaginationProps) => {
  const [firstIndex, setFirstIndex] = React.useState<number>()
  const [lastIndex, setLastIndex] = React.useState<number>(1)
  const [totalPages, setTotalPages] = React.useState<number>(1)
  const [currentProducts, setCurrentProducts] = React.useState<IProduct[]>([])

  React.useEffect(() => {
    setLastIndex(currentPage * itemsOnPage) 
    lastIndex && setFirstIndex(lastIndex - itemsOnPage)
    setTotalPages(Math.ceil(products.length / itemsOnPage)) 
    setCurrentProducts(products.slice(firstIndex, lastIndex))
  }, [firstIndex, lastIndex, currentPage, products])    

  return {
    totalPages,
    currentProducts
  }
}

export default usePagination