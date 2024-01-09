import React from 'react'

interface IPaginationProps {
  countPages: number
  changeCurrentPage: (currentPage: number) => void
}

const PaginationButton:React.FC<any> = (number) => {
  return (
    <div className="pagination-button">
      <span>{number}</span>
    </div>
  )
}

const Pagination:React.FC<IPaginationProps> = ({ countPages, changeCurrentPage }) => {
  return (
    <div className="pagination">
      { [...Array(countPages)].map((_, index) => <div onClick={() => changeCurrentPage(index + 1)}>{index+1}</div>) }
    </div>
  )
}

export default Pagination