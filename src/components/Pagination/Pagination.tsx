interface IPaginationProps {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
}

const Pagination:React.FC<IPaginationProps> = ({ totalPages, setCurrentPage, currentPage }) => {
  const pagesCount = []

  for (let i = 1; i <= totalPages; i++) {
    pagesCount.push(i)
  }  
  
  return (
    <div className="pagination">
      <ul className="pagination-list">
        { pagesCount.map(page => <li key={page} onClick={() => setCurrentPage(page)} className={page === currentPage ? "pagination-list__item active" : "pagination-list__item"}>{page}</li>) }
      </ul>
    </div>
  )
}

export default Pagination