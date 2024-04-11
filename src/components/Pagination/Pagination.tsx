interface IPaginationProps {
  totalPages: number
  setCurrentPage: (page: number) => void
}

const Pagination:React.FC<IPaginationProps> = ({ totalPages, setCurrentPage }) => {
  const pagesCount = []

  for (let i = 0; i < totalPages; i++) {
    pagesCount.push(i + 1)
  }  
  
  return (
    <div className="pagination">
      <ul className="pagination-list">
        { pagesCount.map(page => <li key={page} onClick={() => setCurrentPage(page)}className="pagination-list__item">{page}</li>) }
      </ul>
    </div>
  )
}

export default Pagination